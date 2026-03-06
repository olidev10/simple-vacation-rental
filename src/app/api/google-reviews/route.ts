import { NextResponse } from "next/server";

// Coordenadas do Place To Be
const LAT = 44.8630439;
const LNG = -0.573862;
const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export async function GET() {
  try {
    console.log("🔍 Initialisation Google...");
    console.log(`📍 Coordonates: ${LAT}, ${LNG}`);
    console.log("🔑 API Key configuration:", !!GOOGLE_API_KEY);

    if (!GOOGLE_API_KEY) {
      console.error("❌ API key do Google not configured");
      return NextResponse.json(
        { error: "API key do Google not configured" },
        { status: 500 },
      );
    }

    // Primary search to find the place_id based on coordinates and keyword
    const searchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LAT},${LNG}&radius=50&keyword=Residhotel+Galerie+Tatry&key=${GOOGLE_API_KEY}&language=fr-FR`;
    console.log("🌐 Finding place_id...", searchUrl);

    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();

    console.log("📡 Status :", searchData.status);

    if (
      searchData.status !== "OK" ||
      !searchData.results ||
      searchData.results.length === 0
    ) {
      throw new Error(
        `Error finding place_id: ${searchData.status} - ${searchData.error_message || "No results found"}`,
      );
    }

    const place = searchData.results[0];
    const placeId = place.place_id;

    console.log("✅ Place ID found:", placeId);
    console.log("📍 Name:", place.name);

    // Additional request to get detailed reviews using the place_id
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${GOOGLE_API_KEY}&language=fr-FR`;
    console.log("🌐 Finding details and reviews...");

    const detailsResponse = await fetch(detailsUrl);
    const detailsData = await detailsResponse.json();

    console.log("📡 Status :", detailsData.status);

    if (detailsData.status !== "OK") {
      throw new Error(
        `Error finding details: ${detailsData.status} - ${detailsData.error_message || "No message"}`,
      );
    }

    const placeDetails = detailsData.result;

    // Formating reviews to match our frontend structure
    const formattedReviews =
      placeDetails.reviews?.map((review: any) => ({
        quote: review.text,
        name: review.author_name,
        rating: review.rating,
        time: review.time,
        profilePhoto: review.profile_photo_url,
      })) || [];

    return NextResponse.json({
      rating: placeDetails.rating || 5.0,
      totalReviews: placeDetails.user_ratings_total || 0,
      reviews: formattedReviews,
    });
  } catch (error) {
    console.error("❌ Error finding reviews:", error);
    return NextResponse.json(
      {
        error: "Error finding reviews",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
