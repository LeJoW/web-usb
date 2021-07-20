document.querySelector("button").addEventListener("click", function () {
    navigator.usb
        .requestDevice({
            filters: [
                { vendorId: 0x05ac }, // Apple Inc
                { vendorId: 0x04a9 }, // Canon Inc
            ],
        })
        .then((device) => {
            document.querySelector("result").innerHTML = JSON.stringify(
                device,
                null,
                4
            );
        })
        .catch((error) => {
            console.error(error);
        });
});
