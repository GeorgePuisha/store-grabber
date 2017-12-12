import { ToastOptions } from "ng2-toastr";

export class CustomOption extends ToastOptions {
  animate = "fade";
  positionClass = "toast-bottom-left";
  toastLife = 3000;
  newestOnTop = false;
  showCloseButton = true;
}
