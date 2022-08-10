async function HttpGetData(page, searchText, complianceTypeIds){

    const data={
        page: page,
        pageSize: 36,
        searchText: searchText, 
        productCategoryTypeIds: [],
        complianceTypeIds: complianceTypeIds,
        sourceTypeIds: []
    }; 
    const url = `https://pfp-public-productdb-api.azurewebsites.net/api/product/search/`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    });
    const fetchedData = await response.json();
    return fetchedData;
}

async function httpGetImage(id){
    const url = `https://pfp-public-productdb-api.azurewebsites.net/api/picture/${id}`;
    const response = await fetch(url, {
        method: 'GET',

    });
    const image =  response;
    return image
}

export {HttpGetData, httpGetImage};
