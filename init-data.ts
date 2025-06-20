import { Marika, AnimeSeasons, AnimeTypes, Anime } from "@shineiichijo/marika"
import fs from "fs"

// Initialize Marika client
const { seasons } = new Marika()

// 1986 to 2024
const years = Array.from({ length: 2024 - 1986 + 1 }, (_, i) => 1986 + i)

type AnimeItem = {
  titleEn: string
  titleJa: string
  popularity: number
}

const result: Record<string, AnimeItem[]> = {}

// All seasons
const allSeasons = [
  AnimeSeasons.WINTER,
  AnimeSeasons.SPRING,
  AnimeSeasons.SUMMER,
  AnimeSeasons.FALL
]

for (const year of years) {
  console.log(`Fetching data for year ${year}`)
  
  const yearAnime: any[] = []
  
  try {
    // Fetch anime from all seasons of the year
    for (const season of allSeasons) {
      try {
        const seasonResult = await seasons.getSeason(year, season, {
          sfw: true,
          // filter: AnimeTypes.TV
        })
        
        if (seasonResult.data) {
          yearAnime.push(...seasonResult.data)
        }
        
        // Small delay between requests
        await new Promise(resolve => setTimeout(resolve, 1100))
      } catch (error) {
        console.error(`Error fetching ${season} ${year}:`, error)
      }
    }
    
    // Sort by popularity and get top 12
    const items: AnimeItem[] = []
    
    const sortedAnime = yearAnime
      .filter(anime => anime.popularity && anime.popularity > 0)
      .sort((a, b) => (a.popularity || 0) - (b.popularity || 0))
      .slice(0, 12)
    
    for (const anime of sortedAnime) {
      // Get English and Japanese titles
      const englishTitle = anime.title_english || anime.title || ""
      const japaneseTitle = anime.title_japanese || anime.title || ""
      
      items.push({
        titleEn: englishTitle,
        titleJa: japaneseTitle,
        popularity: anime.popularity || 0
      })
    }
    
    result[year] = items
    console.log(`Year ${year}: Found ${yearAnime.length} total anime, selected top ${items.length}`)
    console.log(`Top 12 anime for ${year}: ${items.map(anime => anime.titleEn).join(", ")}`)
    
    // Small delay between years
    await new Promise(resolve => setTimeout(resolve, 200))
  } catch (error) {
    console.error(`Error fetching data for year ${year}:`, error)
    result[year] = []
  }
}

// Generate the TypeScript file content
let tsContent = `import type { Language } from "./src/i18n"

type AnimeItem = {
  titleEn: string
  titleJa: string
  popularity: number
}

type Data = {
  [key: string]: AnimeItem[]
}

const data: Data = ${JSON.stringify(result, null, 2)}

// Helper function to get anime title by language
export const getAnimeTitle = (anime: AnimeItem, language: Language): string => {
  if (language === "ja") return anime.titleJa
  return anime.titleEn
}

export default data
`

fs.writeFileSync("anime-data.ts", tsContent)
console.log("anime-data.ts has been generated successfully!")
