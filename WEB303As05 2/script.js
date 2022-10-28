/*
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem{
        uniqueId;
         name;
        description;
        category;
    
    constructor(uniqueId, name, description, category){
            this.uniqueId = uniqueId;
            this.name = name;
            this.description = description;
            this.category = category;
            }
    
    updateContentItem(uniqueId, name, description, category){
            if(this.uniqueId == uniqueId && name && description && category){
                this.uniqueId = uniqueId;
                this.name = name;
                this.description = description;
                this.category = category;
                }
    
            }
            toString(){
                return $('#content-item-list').append(`<div class="content-item-wrapper">
                <div id="content-item-${this.uniqueId}">
                <h2 class="name">${this.name}</h2>
                <p class="description">${this.description}</p>
                <div class="category">${this.category}</div>
                </div>
                 </div>`);
                    }
            }
            
            let content = [
            {
                "uniqueId": 0,
                "name": "Nisarg Patel",
                "description": "Tech Giant",
                "category": "CEO"
            },
            {
                "uniqueId": 1,
                "name": "Nirmeet Pasnsuriya",
                "description": "Technology manager",
                "category": "CTO"
            },
            {
                "uniqueId": 2,
                "name": "Ruchit Shah",
                "description": "Financial Manger",
                "category": "Manager"
            },
             {
                "uniqueId": 0,
                "name": "Amit Thakur",
                "description": "Full stack web devloper",
                "category": "Web devloper"
            }
        
            ];
        
            $.each(content, function(key, val){
              $('#content-item-list').append(`<div class="content-item-wrapper">
                <div id="content-item-${this.uniqueId}">
                <h2 class="name">${this.name}</h2>
                <p class="description">${this.description}</p>
                <div class="category">${this.category}</div>
                </div>
            </div>`);
            });

});


