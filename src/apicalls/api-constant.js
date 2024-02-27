/* eslint-disable no-unused-expressions */
const token = "tJ0N8u3VF5YYPOpQQOuwm16Dv6InCizF"
const URL = {
    gify: {
        getStickersCall: ({perPage, page}) => 
            `https://api.giphy.com/v1/stickers/trending?api_key=${token}&limit=${perPage}&offset=${(page - 1)}&rating=g&bundle=messaging_non_clips`
        ,
        getGifCall: ({perPage, page}) => 
            `https://api.giphy.com/v1/gifs/trending?api_key=${token}&limit=${perPage}&offset=${(page - 1)}&rating=g&bundle=messaging_non_clips`
        ,
        getSearchCall: ({query}) => 
            `https://api.giphy.com/v1/gifs/search?api_key=${token}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        
    },
}
  

export const getAPIUrl = (url_name, params) => URL.gify[url_name](params);