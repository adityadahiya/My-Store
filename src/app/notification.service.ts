import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

    showSuccess(successTpl: string | TemplateRef<any>) {
      this.show(successTpl, { classname: 'bg-success text-light', delay: 10000 });
    }

    showError(errorTpl: string | TemplateRef<any>) {
      this.show(errorTpl, { classname: 'bg-danger text-light', delay: 10000 });
    }
  constructor() { }
}
