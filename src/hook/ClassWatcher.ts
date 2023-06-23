class ClassWatcher {
    private targetNode: HTMLElement;
    private classToWatch: string;
    private classAddedCallback: () => void;
    private classRemovedCallback: () => void;
    private observer: MutationObserver;
    private lastClassState: boolean;
  
    constructor(
      targetNode: HTMLElement,
      classToWatch: string,
      classAddedCallback: () => void,
      classRemovedCallback: () => void
    ) {
      this.targetNode = targetNode;
      this.classToWatch = classToWatch;
      this.classAddedCallback = classAddedCallback;
      this.classRemovedCallback = classRemovedCallback;
      this.observer = null;
      this.lastClassState = targetNode.classList.contains(this.classToWatch);
  
      this.init();
    }
  
    private init() {
      this.observer = new MutationObserver(this.mutationCallback);
      this.observe();
    }
  
    private observe() {
      this.observer.observe(this.targetNode, { attributes: true });
    }
  
    public disconnect() {
      this.observer.disconnect();
    }
  
    private mutationCallback = (mutationsList: MutationRecord[]) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          let currentClassState = mutation.target.classList.contains(this.classToWatch);
          if (this.lastClassState !== currentClassState) {
            this.lastClassState = currentClassState;
            if (currentClassState) {
              this.classAddedCallback();
            } else {
              this.classRemovedCallback();
            }
          }
        }
      }
    };
  }
  
  export default ClassWatcher;