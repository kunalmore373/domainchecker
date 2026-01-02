
const apiurl = "https://api.whoisfreaks.com/v1.0/domain/availability?&sug=true&count=5&apiKey=9bd1e41d9ae1436191118cc938b83795";
const searchBox = document.querySelector('#input-id') ;
const searchBtn = document.querySelector ('#button-id') ;
async function checkDomain(domain_name) {
    try {
        const response = await fetch(apiurl + `&domain=${domain_name}`);
        const data = await response.json();
        console.log(data);

        // Adjust based on actual key in response
        if (data.domain_available_response[4].domainAvailability === "false" || data.domain_available_response[4].domainAvailability === false) {
            document.querySelector('#availability').innerHTML = "❌ Domain not available.";
        } else {
            document.querySelector('#availability').innerHTML = "✅ Hurray! The domain is available to use.";
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        document.querySelector('#availability').innerHTML = "⚠️ Failed to check domain.";
    }
}



searchBtn.addEventListener ('click' , ()=>{
    document.querySelector('#availability').innerHTML = "🔍 Checking...";
    checkDomain(searchBox.value) ;
}) ;
