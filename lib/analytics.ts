'use client';
export const track=(e:string,p:Record<string,any>={})=>{if(typeof window==='undefined')return; if((window as any).gtag){(window as any).gtag('event',e,p);}};
export const trackTelClick=(label='call')=>track('click_tel',{label});
export const trackMailClick=(label='email')=>track('click_mailto',{label});
