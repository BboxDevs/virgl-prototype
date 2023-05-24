(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        console.log('received', obj)
    
        const urlParams = new URLSearchParams(window.location.search);
        const jobNumber = urlParams.get('vjk') ?? urlParams.get('jk');
    
        const jobTitle = document.querySelector('.jobsearch-JobInfoHeader-title')?.textContent
        const jobCompany = document.querySelector('.jobsearch-CompanyInfoContainer a:first-child')?.textContent
    
        // todo: the jobTitle and jobCompany doesn't seem to show up on the dashboard. Coz of React
    
        console.log({
            jobNumber,
            jobTitle,
            jobCompany
        })
    })
})()
