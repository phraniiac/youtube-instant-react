import YTSearch from 'youtube-api-search';


const API_KEY = "AIzaSyAAv7C7URXnHF0E2BPCIf_nRtveowe43uQ";

const YoutubeApi = {

    videoSearch : (term, callback) => {
        // YTSearch
        YTSearch({key : API_KEY, term: term}, (videos) => callback(videos))
    }

}

export default YoutubeApi;