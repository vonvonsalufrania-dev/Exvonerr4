// VON Roblox Publish Service

function connectRoblox() {
    const status = document.getElementById("connectionStatus");

    status.textContent =
        "Demo connection only — secure Roblox authorization required.";
}


function startCreate() {

    const placeId =
        document.getElementById("placeId").value.trim();

    const amount =
        Number(document.getElementById("amount").value);

    const placeName =
        document.getElementById("placeName").value.trim();

    const privatePlace =
        document.getElementById("privatePlace").checked;

    const result =
        document.getElementById("result");

    const created =
        document.getElementById("created");

    const failed =
        document.getElementById("failed");


    // Check Place ID
    if (placeId === "") {
        result.textContent =
            "Ilagay muna ang Template Place ID.";
        return;
    }


    // Check amount
    if (amount < 1 || amount > 100) {
        result.textContent =
            "Place Amount dapat 1 hanggang 100.";
        return;
    }


    // Reset counters
    created.textContent = "0";
    failed.textContent = "0";

    result.textContent =
        "VON is creating demo places...";


    let count = 0;


    // Demo progress
    const timer = setInterval(() => {

        count++;

        created.textContent = count;

        result.textContent =
            "VON Creating " +
            (placeName || "VON Place") +
            " #" +
            count;


        if (count >= amount) {

            clearInterval(timer);

            result.textContent =
                "VON Demo Complete! Created: " +
                count +
                ", Failed: 0.";

            if (privatePlace) {
                result.textContent +=
                    " Private option selected.";
            }
        }

    }, 500);
}