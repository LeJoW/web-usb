document.querySelector("button").addEventListener("click", function () {
    navigator.usb
        .requestDevice({ filters: [{ vendorId: 0x05ac }] })
        .then((device) => {
            document.querySelector("result").innerHTML = JSON.stringify(device);
        })
        .catch((error) => {
            console.error(error);
        });
});
