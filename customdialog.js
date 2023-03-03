export function alertButtonOnClick() {
    let alertDialog = document.getElementById('alertDialog');
    alertDialog.showModal();
}

export function confirmButtonOnClick() {
    let confirmDialog = document.getElementById('confirmDialog');
    confirmDialog.showModal();
}

export function confirmDialogOnClose() {
    let dialogOutput = document.getElementById('dialogOutput');
    let confirmDialog = document.getElementById('confirmDialog');
    dialogOutput.innerHTML = `Confirm result : ${confirmDialog.returnValue}`;
}

export function promtButtonOnClick() {
    let promtDialog = document.getElementById('promtDialog');
    promtDialog.showModal();
}

export function inputTextOnChange(e) {
    let okButton = document.getElementById('okButton');
    okButton.value = e.target.value;
}