function $P(selector: string) {

  const self: any = {
    element: document.querySelector(selector),
    html: () => self.element,
    on: (event: any, callback: any) => {
      document.addEventListener(event, callback);
      return self;
    },
    hide: () => {
      self.element.style.display = "none";
      return self;
    }
  }

  return self;

}

export default $P;