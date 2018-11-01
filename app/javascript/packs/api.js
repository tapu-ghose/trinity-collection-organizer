const axios = require('axios');

export default {
    fetchProducts(collectionId, url) {
        axios.get(`/admin/products.json?collection_id=${collectionId}`)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    //save
}
