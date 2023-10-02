export function extractMainHost(url: string) {
  url = url.replace(/https?:\/\//i, "").replace(/^www./i, "");
  url = url.replace(/\/.*$/, "").replace(/\?.*$/, "");
  const mainHost = url.match(/[a-z0-9][a-z0-9-]{1,63}.[a-z.]{2,6}$/i);
  return mainHost ? mainHost[0] : url;
};

export function extractMainHost2(url: string) {
  // Remove any username and password (e.g., https://test:test@)
  url = url.replace(/^(https?:\/)?([^@]+@)?/, '');
  url = url.replace(/^(http?:\/)?([^@]+@)?/, '');

  // Remove 'www.' if it exists
  url = url.replace(/^www\./, '');

  // Extract the host (domain)
  const hostMatch = url.match(/^([a-zA-Z0-9.-]+)\//);
  if (hostMatch) {
    return hostMatch[1];
  } else {
    return url; // Return the entire string if no valid host is found
  }
}

export const validateWebsiteURL = async(address: string, singleSearch: boolean) => {
  const response = await fetch(`https://api.veeb.io/api/getData?url=${address}`);
  try {
    if(response.status === 200) {
      const websites: any = localStorage.getItem("websites") || [];
      address = address.trim().toLowerCase();
      const url = extractMainHost(address);
      const json = await response.json();
      // all contacts count 
      const phoneCount = Object.values(json.data.phones).length;
      const emailCount = Object.values(json.data.emails).length;
      const telegramCount = Object.values(json.data.telegrams).length;
      const socialMediaCount = Object.values(json.data.social_media).reduce((acc: number, cur: any) => acc + Object.values(cur).length, 0);
      const contactsCount = phoneCount + emailCount + telegramCount + socialMediaCount;
  
      const newItem = { name: json.data.companyName, address: url, contactsCount };
      if (!websites.length) {
        localStorage.setItem("websites", JSON.stringify([newItem]));
      } else {
        const prevWebsites = JSON.parse(websites);
        if(prevWebsites.find((item: any) => item.address === url)) {
        } else {
          localStorage.setItem(
            "websites",
            JSON.stringify([...prevWebsites, newItem])
          );
        }
      }
      return url;
    } else {
      if(singleSearch) {
        return Promise.reject(new Error("Search error"));
      } else {
        const websites: any = localStorage.getItem("websites") || [];
        const errorItem = {name: address, address, error: "Некорректный адрес"}
        if (!websites.length) {
          localStorage.setItem("websites", JSON.stringify([errorItem]));
        } else {
          const prevWebsites = JSON.parse(websites);
          if(!prevWebsites.find((item: any) => item.address === address)) {
            localStorage.setItem(
              "websites",
              JSON.stringify([...prevWebsites, errorItem])
            );
          }
        }
      }
    }
  } catch (error) {
    console.error("Err", error); 
  }
}


