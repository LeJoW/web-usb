document.querySelector("button").addEventListener("click", function () {
    navigator.usb
        .requestDevice({ filters: [{ vendorId: 0x05ac }] })
        .then((device) => {
            for (const key in device) {
                const element = device[key];
                if (!(element instanceof Function)) {
                    document.querySelector(
                        "#result"
                    ).innerHTML += `<strong>${key}:</strong> ${element}<br>\n`;
                }
            }
        })
        .catch((error) => {
            console.error(error);
        });
});
