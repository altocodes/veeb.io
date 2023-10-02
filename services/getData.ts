export const getAddress = async(name: string) => {
  const res = await fetch(`https://api.veeb.io/api/v2/getData?url=${name}`, {
    cache: "no-store",
    // next: { revalidate: 1800 } // half an hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch JSON data from API');
  }
  
  return res.json();
}