import axios from "axios";

class Search {
    constructor() {
        this.searchInput = document.querySelector('.search_input');
        this.searchResultsUl = document.querySelectorAll('.results');

        //Typing timer
        this.typingTimer;
        //Previous key typed
        this.prevKey;
        
        this.onType();
    }

    onType() {
        // this.searchInput.forEach(input => input.addEventListener('input', this.typingLogic.bind(this)));
        this.searchInput.addEventListener('input', this.typingLogic.bind(this));
    };


    typingLogic() {
        // this.searchInput.forEach(input => {

        //     // If current input is different from the previous input
        // if (input.value != this.prevKey || input.value != "") {

        //     // clear list after each key
        //     this.searchResultsUl.forEach(div => div.innerHTML = '');
            
        //     // Reset timer after each key
        //     clearTimeout(this.typingTimer);

        //     // If the search bar gets an  input
        //     if (input.value) {
        //         // PROBLEM AREA!!!!!!!!!!!!!!!!!!!!!!! FIGURE THIS OUT !!!!!!!!!!!!!!!!!!!!!!
        //         // Run the getResults function after 1 sec of a keypress
        //         this.typingTimer = setTimeout(this.getResults(input.value), 1000);
        //     }

        // } else {
        //     // Clear search results
        //     this.searchResultsUl.forEach(div => div.innerHTML = '');

        // }

        //     this.prevKey = input.value;
        // })
        
        // If current input is different from the previous input
        if (this.searchInput.value != this.prevKey || this.searchInput.value != "") {

            // clear list after each key
            this.searchResultsUl.forEach(div => div.innerHTML = '');
            
            // Reset timer after each key
            clearTimeout(this.typingTimer);

            // If the search bar gets an  searchInput
            if (this.searchInput.value) {
                // PROBLEM AREA!!!!!!!!!!!!!!!!!!!!!!! FIGURE THIS OUT !!!!!!!!!!!!!!!!!!!!!!
                // Run the getResults function after 1 sec of a keypress
                this.typingTimer = setTimeout(this.getResults.bind(this), 500);
            }

        } else {
            // Clear search results
            this.searchResultsUl.forEach(div => div.innerHTML = '');

        }

        this.prevKey = this.searchInput.value;

    }


    async getResults() {
        console.log("searching....");

        try {
        
            const response = await axios.get(`${wp_localize_script_data.root_url}/wp-json/code-x_search/v1/search?term=${this.searchInput.value}`);
            
            response.data.forEach(res => {

                console.log(res);
                this.searchResultsUl.forEach(div => div.innerHTML += `<li class="search_result"><a href="${res.permalink}">${res.title}</a></li>`);

            });

        } catch (err) {
            console.error('Search Failed');
            console.log(err);
        }

    }

}

export default Search;