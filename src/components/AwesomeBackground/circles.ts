import p5 from "p5";

// http://processingjs.org/sketches/bannerSketch.pde

// tslint:disable: prefer-const
// @ts-ignore

export function circles(w: number, h: number) {
  return function circlesSketch(p: p5) {
    let count: number = 100;
  
    let maxSize: number = 100;
    let minSize: number = 20;
  
    let e: number[][] = new Array(count);
    for (let i = 0; i < e.length; i++) {
      e[i] = new Array(5);
    }
  
    let ds: number = 2;
  
    let dragging: boolean = false;
  
    let lockedCircle: number;
    let lockedOffsetX: number;
    let lockedOffsetY: number;
  
    p.mousePressed = function mousePressed() {
      for (let i = 0; i < count; i++) {
        if (p.sq(e[i][0] - p.mouseX) + p.sq(e[i][1] - p.mouseY) < p.sq(e[i][2] / 2)) {
          lockedCircle = i;
          lockedOffsetX = p.mouseX - Number(e[i][0]);
          lockedOffsetY = p.mouseY - Number(e[i][1]);
  
          dragging = true;
          break;
        }
      }
    };
  
    p.mouseReleased = function mouseReleased() {
      dragging = false;
    };
  
    p.setup = function setup() {
      p.createCanvas(w, h);
      p.frameRate(30);
      p.strokeWeight(1);
      for (let i = 0; i < count; i++) {
        e[i][0] = p.random(p.width);
        e[i][1] = p.random(p.height);
        e[i][2] = p.random(minSize, maxSize);
        e[i][3] = p.random(-0.12, 0.12);
        e[i][4] = p.random(-0.12, 0.12);
      }
    };
  
    p.draw = function draw() {
      p.background(0);
  
      for (let i = 0; i < count; i++) {
        p.noStroke();
  
        let radi = e[i][2];
        let diam = radi / 2;
  
        if (p.sq(e[i][0] - p.mouseX ) + p.sq(e[i][1] - p.mouseY) < p.sq(e[i][2] / 2)) {
          p.fill(64, 187, 128, 100);
        } else {
          p.fill(64, 128, 187, 100);
        }
  
        if (lockedCircle === i && dragging) {
          e[i][0] = p.mouseX - lockedOffsetX;
          e[i][1] = p.mouseY - lockedOffsetY;
        }
  
        p.ellipse(e[i][0], e[i][1], radi, radi);
  
        e[i][0] += e[i][3];
        e[i][1] += e[i][4];
  
        if (e[i][0] < -diam) {
          e[i][0] = p.width + diam;
        }
        if (e[i][0] > p.width + diam) {
          e[i][0] = -diam;
        }
        if (e[i][1] < -diam) {
          e[i][1] = p.height + diam;
        }
        if (e[i][1] > p.height + diam) {
          e[i][1] = -diam;
        }
  
        if ((lockedCircle === i && dragging)) {
          p.fill(255, 255, 255, 255);
          p.stroke(128, 255, 0, 100);
        } else {            
          p.fill(0, 0, 0, 255);
          p.stroke(64, 128, 128, 255);
        }
  
        for (let k = 0; k < count; k++) {  
          if ( p.sq(e[i][0] - e[k][0]) + p.sq(e[i][1] - e[k][1]) < p.sq(diam) ) {
            p.line(e[i][0], e[i][1], e[k][0], e[k][1]);
          }
        }
        p.noStroke();      
        // Draw dot in center of circle
        p.rect(e[i][0] - ds, e[i][1] - ds, ds * 2, ds * 2);
      }
    };
  }
}


