AFRAME.registerComponent("markerhandler",{
    init: async function () {
        this.el.addEventListener("markerFound", () => {
            console.log("marker is found")
            this.handleMarkerFound();
        });
        this.el.addEventListener("markerLost", () => {
            console.log("marker is lost")
            this.handleMarkerLost();
        });
    },
    handleMarkerFound: function () {
        //changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.stylr.display = "flex";

        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button");

        //Handling Click events
        ratingButton.addEventListener("click", function (){
            swal({
                icon: "warning",
                title: "Rate dish",
                text: "Work in progress"
            });
        });
        orderButton.addeventListener("click", () =>{
            swal({
                icon: "htpps://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks For your Order!",
                text: "Your order will soon be served at your table!"

            });

        });

    },
    handleMarkerLost: function () {
        //changing button div visibility
         var buttonDiv = document.getElementById("button-div");
         buttonDiv.style.display = "none";
    
    }
});