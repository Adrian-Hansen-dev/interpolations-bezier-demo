/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vt="srgb",ii="srgb-linear",xr="linear",it="srgb";const ka="300 es";class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const n=r[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nr=Math.PI/180,ga=180/Math.PI;function Fi(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(At[a&255]+At[a>>8&255]+At[a>>16&255]+At[a>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[r&255]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]).toLowerCase()}function Ze(a,e,t){return Math.max(e,Math.min(t,a))}function Ao(a,e){return(a%e+e)%e}function Or(a,e,t){return(1-t)*a+t*e}function Mi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Pt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*n+e.x,this.y=i*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Li{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,s,o){let l=r[n+0],c=r[n+1],u=r[n+2],f=r[n+3];const h=i[s+0],d=i[s+1],g=i[s+2],_=i[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-o;const p=l*h+c*d+u*g+f*_,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),C=Math.atan2(R,p*y);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const x=o*y;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,n,i,s){const o=r[n],l=r[n+1],c=r[n+2],u=r[n+3],f=i[s],h=i[s+1],d=i[s+2],g=i[s+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(n/2),f=o(i/2),h=l(r/2),d=l(n/2),g=l(i/2);switch(s){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=r+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(i-c)*d,this._z=(s-n)*d}else if(r>o&&r>f){const d=2*Math.sqrt(1+r-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(i+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-r-f);this._w=(i-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-r-o);this._w=(s-n)/d,this._x=(i+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*o+n*c-i*l,this._y=n*u+s*l+i*o-r*c,this._z=i*u+s*c+r*l-n*o,this._w=s*u-r*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*f+this._w*h,this._x=r*f+this._x*h,this._y=n*f+this._y*h,this._z=i*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,s=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*s,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*s,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*r),u=2*(o*t-i*n),f=2*(i*r-s*t);return this.x=t+l*c+s*f-o*u,this.y=r+l*u+o*c-i*f,this.z=n+l*f+i*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new te,za=new Li;class qe{constructor(e,t,r,n,i,s,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c)}set(e,t,r,n,i,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],f=r[7],h=r[2],d=r[5],g=r[8],_=n[0],m=n[3],p=n[6],y=n[1],E=n[4],x=n[7],R=n[2],C=n[5],A=n[8];return i[0]=s*_+o*y+l*R,i[3]=s*m+o*E+l*C,i[6]=s*p+o*x+l*A,i[1]=c*_+u*y+f*R,i[4]=c*m+u*E+f*C,i[7]=c*p+u*x+f*A,i[2]=h*_+d*y+g*R,i[5]=h*m+d*E+g*C,i[8]=h*p+d*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-r*i*u+r*o*l+n*i*c-n*s*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,h=o*l-u*i,d=c*i-s*l,g=t*f+r*h+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(n*c-u*r)*_,e[2]=(o*r-n*s)*_,e[3]=h*_,e[4]=(u*t-n*l)*_,e[5]=(n*i-o*t)*_,e[6]=d*_,e[7]=(r*l-c*t)*_,e[8]=(s*t-r*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,s,o){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new qe;function Ys(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Sr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ro(){const a=Sr("canvas");return a.style.display="block",a}const Va={};function Pi(a){a in Va||(Va[a]=!0,console.warn(a))}function Co(a,e,t){return new Promise(function(r,n){function i(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}const Ha=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wa=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wo(){const a={enabled:!0,workingColorSpace:ii,spaces:{},convert:function(n,i,s){return this.enabled===!1||i===s||!i||!s||(this.spaces[i].transfer===it&&(n.r=un(n.r),n.g=un(n.g),n.b=un(n.b)),this.spaces[i].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[i].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===it&&(n.r=ni(n.r),n.g=ni(n.g),n.b=ni(n.b))),n},workingToColorSpace:function(n,i){return this.convert(n,this.workingColorSpace,i)},colorSpaceToWorking:function(n,i){return this.convert(n,i,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===""?xr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,i=this.workingColorSpace){return n.fromArray(this.spaces[i].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,i,s){return n.copy(this.spaces[i].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,i){return Pi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(n,i)},toWorkingColorSpace:function(n,i){return Pi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(n,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[ii]:{primaries:e,whitePoint:r,transfer:xr,toXYZ:Ha,fromXYZ:Wa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:r,transfer:it,toXYZ:Ha,fromXYZ:Wa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),a}const $e=wo();function un(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ni(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let zn;class Uo{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zn===void 0&&(zn=Sr("canvas")),zn.width=e.width,zn.height=e.height;const n=zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),r=zn}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let s=0;s<i.length;s++)i[s]=un(i[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(un(t[r]/255)*255):t[r]=un(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Do=0;class ya{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Do++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?i.push(kr(n[s].image)):i.push(kr(n[s]))}else i=kr(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function kr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Uo.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Po=0;const zr=new te;class wt extends ai{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,r=1001,n=1001,i=1006,s=1008,o=1023,l=1009,c=wt.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Po++}),this.uuid=Fi(),this.name="",this.source=new ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zr).x}get height(){return this.source.getSize(zr).y}get depth(){return this.source.getSize(zr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=300;wt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,r=0,n=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*i,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*i,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*i,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,x=(d+1)/2,R=(p+1)/2,C=(u+h)/4,A=(f+_)/4,U=(g+m)/4;return E>x&&E>R?E<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(E),n=C/r,i=A/r):x>R?x<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(x),r=C/n,i=U/n):R<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(R),r=A/i,n=U/i),this.set(r,n,i,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fo extends ai{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const n={width:e,height:t,depth:r.depth},i=new wt(n);this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new ya(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Fo{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ks extends wt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lo extends wt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=i.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Kt):Kt.fromBufferAttribute(i,s),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hi.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Hi.copy(r.boundingBox)),Hi.applyMatrix4(e.matrixWorld),this.union(Hi)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),Wi.subVectors(this.max,Ei),Vn.subVectors(e.a,Ei),Hn.subVectors(e.b,Ei),Wn.subVectors(e.c,Ei),mn.subVectors(Hn,Vn),gn.subVectors(Wn,Hn),yn.subVectors(Vn,Wn);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-yn.z,yn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,yn.z,0,-yn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-yn.y,yn.x,0];return!Vr(t,Vn,Hn,Wn,Wi)||(t=[1,0,0,0,1,0,0,0,1],!Vr(t,Vn,Hn,Wn,Wi))?!1:(Xi.crossVectors(mn,gn),t=[Xi.x,Xi.y,Xi.z],Vr(t,Vn,Hn,Wn,Wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const an=[new te,new te,new te,new te,new te,new te,new te,new te],Kt=new te,Hi=new In,Vn=new te,Hn=new te,Wn=new te,mn=new te,gn=new te,yn=new te,Ei=new te,Wi=new te,Xi=new te,Tn=new te;function Vr(a,e,t,r,n){for(let i=0,s=a.length-3;i<=s;i+=3){Tn.fromArray(a,i);const o=n.x*Math.abs(Tn.x)+n.y*Math.abs(Tn.y)+n.z*Math.abs(Tn.z),l=e.dot(Tn),c=t.dot(Tn),u=r.dot(Tn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Io=new In,yi=new te,Hr=new te;class si{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Io.setFromPoints(e).getCenter(r);let n=0;for(let i=0,s=e.length;i<s;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);const t=yi.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(yi,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(Hr)),this.expandByPoint(yi.copy(e.center).sub(Hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sn=new te,Wr=new te,qi=new te,_n=new te,Xr=new te,Yi=new te,qr=new te;class Ta{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Wr.copy(e).add(t).multiplyScalar(.5),qi.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(Wr);const i=e.distanceTo(t)*.5,s=-this.direction.dot(qi),o=_n.dot(this.direction),l=-_n.dot(qi),c=_n.lengthSq(),u=Math.abs(1-s*s);let f,h,d,g;if(u>0)if(f=s*l-o,h=s*o-l,g=i*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=i,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h=-i,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-s*i+o)),h=f>0?-i:Math.min(Math.max(-i,-l),i),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-i,-l),i),d=h*(h+2*l)+c):(f=Math.max(0,-(s*i+o)),h=f>0?i:Math.min(Math.max(-i,-l),i),d=-f*f+h*(h+2*l)+c);else h=s>0?-i:i,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Wr).addScaledVector(qi,h),d}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const r=sn.dot(this.direction),n=sn.dot(sn)-r*r,i=e.radius*e.radius;if(n>i)return null;const s=Math.sqrt(i-n),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(i=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),r>s||i>n||((i>r||isNaN(r))&&(r=i),(s<n||isNaN(n))&&(n=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,r,n,i){Xr.subVectors(t,e),Yi.subVectors(r,e),qr.crossVectors(Xr,Yi);let s=this.direction.dot(qr),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;_n.subVectors(this.origin,e);const l=o*this.direction.dot(Yi.crossVectors(_n,Yi));if(l<0)return null;const c=o*this.direction.dot(Xr.cross(_n));if(c<0||l+c>s)return null;const u=-o*_n.dot(qr);return u<0?null:this.at(u/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,r,n,i,s,o,l,c,u,f,h,d,g,_,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c,u,f,h,d,g,_,m)}set(e,t,r,n,i,s,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=i,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/Xn.setFromMatrixColumn(e,0).length(),i=1/Xn.setFromMatrixColumn(e,1).length(),s=1/Xn.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const h=s*u,d=s*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-s*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=s*u,t[9]=_-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,d=s*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,d=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=s*l,d=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=s*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(No,e,Oo)}lookAt(e,t,r){const n=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),vn.crossVectors(r,Lt),vn.lengthSq()===0&&(Math.abs(r.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),vn.crossVectors(r,Lt)),vn.normalize(),Ki.crossVectors(Lt,vn),n[0]=vn.x,n[4]=Ki.x,n[8]=Lt.x,n[1]=vn.y,n[5]=Ki.y,n[9]=Lt.y,n[2]=vn.z,n[6]=Ki.z,n[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],f=r[5],h=r[9],d=r[13],g=r[2],_=r[6],m=r[10],p=r[14],y=r[3],E=r[7],x=r[11],R=r[15],C=n[0],A=n[4],U=n[8],M=n[12],S=n[1],P=n[5],w=n[9],I=n[13],L=n[2],V=n[6],z=n[10],ne=n[14],W=n[3],K=n[7],Y=n[11],F=n[15];return i[0]=s*C+o*S+l*L+c*W,i[4]=s*A+o*P+l*V+c*K,i[8]=s*U+o*w+l*z+c*Y,i[12]=s*M+o*I+l*ne+c*F,i[1]=u*C+f*S+h*L+d*W,i[5]=u*A+f*P+h*V+d*K,i[9]=u*U+f*w+h*z+d*Y,i[13]=u*M+f*I+h*ne+d*F,i[2]=g*C+_*S+m*L+p*W,i[6]=g*A+_*P+m*V+p*K,i[10]=g*U+_*w+m*z+p*Y,i[14]=g*M+_*I+m*ne+p*F,i[3]=y*C+E*S+x*L+R*W,i[7]=y*A+E*P+x*V+R*K,i[11]=y*U+E*w+x*z+R*Y,i[15]=y*M+E*I+x*ne+R*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+i*l*f-n*c*f-i*o*h+r*c*h+n*o*d-r*l*d)+_*(+t*l*d-t*c*h+i*s*h-n*s*d+n*c*u-i*l*u)+m*(+t*c*f-t*o*d-i*s*f+r*s*d+i*o*u-r*c*u)+p*(-n*o*u-t*l*f+t*o*h+n*s*f-r*s*h+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,E=g*h*c-u*m*c-g*l*d+s*m*d+u*l*p-s*h*p,x=u*_*c-g*f*c+g*o*d-s*_*d-u*o*p+s*f*p,R=g*f*l-u*_*l-g*o*h+s*_*h+u*o*m-s*f*m,C=t*y+r*E+n*x+i*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=y*A,e[1]=(_*h*i-f*m*i-_*n*d+r*m*d+f*n*p-r*h*p)*A,e[2]=(o*m*i-_*l*i+_*n*c-r*m*c-o*n*p+r*l*p)*A,e[3]=(f*l*i-o*h*i-f*n*c+r*h*c+o*n*d-r*l*d)*A,e[4]=E*A,e[5]=(u*m*i-g*h*i+g*n*d-t*m*d-u*n*p+t*h*p)*A,e[6]=(g*l*i-s*m*i-g*n*c+t*m*c+s*n*p-t*l*p)*A,e[7]=(s*h*i-u*l*i+u*n*c-t*h*c-s*n*d+t*l*d)*A,e[8]=x*A,e[9]=(g*f*i-u*_*i-g*r*d+t*_*d+u*r*p-t*f*p)*A,e[10]=(s*_*i-g*o*i+g*r*c-t*_*c-s*r*p+t*o*p)*A,e[11]=(u*o*i-s*f*i-u*r*c+t*f*c+s*r*d-t*o*d)*A,e[12]=R*A,e[13]=(u*_*n-g*f*n+g*r*h-t*_*h-u*r*m+t*f*m)*A,e[14]=(g*o*n-s*_*n-g*r*l+t*_*l+s*r*m-t*o*m)*A,e[15]=(s*f*n-u*o*n+u*r*l-t*f*l-s*r*h+t*o*h)*A,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,s=e.x,o=e.y,l=e.z,c=i*s,u=i*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+r,u*l-n*s,0,c*l-n*o,u*l+n*s,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,s){return this.set(1,r,i,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,s=t._y,o=t._z,l=t._w,c=i+i,u=s+s,f=o+o,h=i*c,d=i*u,g=i*f,_=s*u,m=s*f,p=o*f,y=l*c,E=l*u,x=l*f,R=r.x,C=r.y,A=r.z;return n[0]=(1-(_+p))*R,n[1]=(d+x)*R,n[2]=(g-E)*R,n[3]=0,n[4]=(d-x)*C,n[5]=(1-(h+p))*C,n[6]=(m+y)*C,n[7]=0,n[8]=(g+E)*A,n[9]=(m-y)*A,n[10]=(1-(h+_))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=Xn.set(n[0],n[1],n[2]).length();const s=Xn.set(n[4],n[5],n[6]).length(),o=Xn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],jt.copy(this);const c=1/i,u=1/s,f=1/o;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=f,jt.elements[9]*=f,jt.elements[10]*=f,t.setFromRotationMatrix(jt),r.x=i,r.y=s,r.z=o,this}makePerspective(e,t,r,n,i,s,o=2e3,l=!1){const c=this.elements,u=2*i/(t-e),f=2*i/(r-n),h=(t+e)/(t-e),d=(r+n)/(r-n);let g,_;if(l)g=i/(s-i),_=s*i/(s-i);else if(o===2e3)g=-(s+i)/(s-i),_=-2*s*i/(s-i);else if(o===2001)g=-s/(s-i),_=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,r,n,i,s,o=2e3,l=!1){const c=this.elements,u=2/(t-e),f=2/(r-n),h=-(t+e)/(t-e),d=-(r+n)/(r-n);let g,_;if(l)g=1/(s-i),_=s/(s-i);else if(o===2e3)g=-2/(s-i),_=-(s+i)/(s-i);else if(o===2001)g=-1/(s-i),_=-i/(s-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Xn=new te,jt=new ft,No=new te(0,0,0),Oo=new te(1,1,1),vn=new te,Ki=new te,Lt=new te,Xa=new ft,qa=new Li;class fn{constructor(e=0,t=0,r=0,n=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Xa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xa,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qa.setFromEuler(this),this.setFromQuaternion(qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class js{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bo=0;const Ya=new te,qn=new Li,on=new ft,ji=new te,Ti=new te,Go=new te,ko=new Li,Ka=new te(1,0,0),ja=new te(0,1,0),Za=new te(0,0,1),Ja={type:"added"},zo={type:"removed"},Yn={type:"childadded",child:null},Yr={type:"childremoved",child:null};class Ut extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bo++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new te,t=new fn,r=new Li,n=new te(1,1,1);function i(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ft},normalMatrix:{value:new qe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(Ka,e)}rotateY(e){return this.rotateOnAxis(ja,e)}rotateZ(e){return this.rotateOnAxis(Za,e)}translateOnAxis(e,t){return Ya.copy(e).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ka,e)}translateY(e){return this.translateOnAxis(ja,e)}translateZ(e){return this.translateOnAxis(Za,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ji.copy(e):ji.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ti,ji,this.up):on.lookAt(ji,Ti,this.up),this.quaternion.setFromRotationMatrix(on),n&&(on.extractRotation(n.matrixWorld),qn.setFromRotationMatrix(on),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ja),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zo),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ja),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,Go),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,ko,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];i(e.shapes,f)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),d=s(e.animations),g=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Ut.DEFAULT_UP=new te(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new te,ln=new te,Kr=new te,cn=new te,Kn=new te,jn=new te,Qa=new te,jr=new te,Zr=new te,Jr=new te,Qr=new ct,$r=new ct,ea=new ct;class Qt{constructor(e=new te,t=new te,r=new te){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Zt.subVectors(e,t),n.cross(Zt);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){Zt.subVectors(n,t),ln.subVectors(r,t),Kr.subVectors(e,t);const s=Zt.dot(Zt),o=Zt.dot(ln),l=Zt.dot(Kr),c=ln.dot(ln),u=ln.dot(Kr),f=s*c-o*o;if(f===0)return i.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(s*u-o*l)*h;return i.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,r,n,i,s,o,l){return this.getBarycoord(e,t,r,n,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,cn.x),l.addScaledVector(s,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(e,t,r,n,i,s){return Qr.setScalar(0),$r.setScalar(0),ea.setScalar(0),Qr.fromBufferAttribute(e,t),$r.fromBufferAttribute(e,r),ea.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Qr,i.x),s.addScaledVector($r,i.y),s.addScaledVector(ea,i.z),s}static isFrontFacing(e,t,r,n){return Zt.subVectors(r,t),ln.subVectors(e,t),Zt.cross(ln).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Zt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return Qt.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let s,o;Kn.subVectors(n,r),jn.subVectors(i,r),jr.subVectors(e,r);const l=Kn.dot(jr),c=jn.dot(jr);if(l<=0&&c<=0)return t.copy(r);Zr.subVectors(e,n);const u=Kn.dot(Zr),f=jn.dot(Zr);if(u>=0&&f<=u)return t.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(Kn,s);Jr.subVectors(e,i);const d=Kn.dot(Jr),g=jn.dot(Jr);if(g>=0&&d<=g)return t.copy(i);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(jn,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Qa.subVectors(i,n),o=(f-u)/(f-u+(d-g)),t.copy(n).addScaledVector(Qa,o);const p=1/(m+_+h);return s=_*p,o=h*p,t.copy(r).addScaledVector(Kn,s).addScaledVector(jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function ta(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,r,n=$e.workingColorSpace){return this.r=e,this.g=t,this.b=r,$e.colorSpaceToWorking(this,n),this}setHSL(e,t,r,n=$e.workingColorSpace){if(e=Ao(e,1),t=Ze(t,0,1),r=Ze(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,s=2*r-i;this.r=ta(s,i,e+1/3),this.g=ta(s,i,e),this.b=ta(s,i,e-1/3)}return $e.colorSpaceToWorking(this,n),this}setStyle(e,t=Vt){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const r=Zs[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=un(e.r),this.g=un(e.g),this.b=un(e.b),this}copyLinearToSRGB(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return $e.workingToColorSpace(Rt.copy(this),e),Math.round(Ze(Rt.r*255,0,255))*65536+Math.round(Ze(Rt.g*255,0,255))*256+Math.round(Ze(Rt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Rt.copy(this),t);const r=Rt.r,n=Rt.g,i=Rt.b,s=Math.max(r,n,i),o=Math.min(r,n,i);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case r:l=(n-i)/f+(n<i?6:0);break;case n:l=(i-r)/f+2;break;case i:l=(r-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Vt){$e.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,r=Rt.g,n=Rt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(Zi);const r=Or(xn.h,Zi.h,t),n=Or(xn.s,Zi.s,t),i=Or(xn.l,Zi.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Je;Je.NAMES=Zs;let Vo=0;class oi extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vo++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(r.blending=this.blending),this.side!==0&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==204&&(r.blendSrc=this.blendSrc),this.blendDst!==205&&(r.blendDst=this.blendDst),this.blendEquation!==100&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(r.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const s=[];for(const o in i){const l=i[o];delete l.metadata,s.push(l)}return s}if(t){const i=n(e.textures),s=n(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ba extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new te,Ji=new et;let Ho=0;class $t{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ho++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Mi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Pt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),r=Pt(r,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),r=Pt(r,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class Js extends $t{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Qs extends $t{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Mn extends $t{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Wo=0;const zt=new ft,na=new Ut,Zn=new te,It=new In,bi=new In,vt=new te;class rn extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wo++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ys(e)?Qs:Js)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new qe().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,r){return zt.makeTranslation(e,t,r),this.applyMatrix4(zt),this}scale(e,t,r){return zt.makeScale(e,t,r),this.applyMatrix4(zt),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Mn(r,3))}else{const r=Math.min(e.length,t.count);for(let n=0;n<r;n++){const i=e[n];t.setXYZ(n,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];It.setFromBufferAttribute(i),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];bi.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(It.min,bi.min),It.expandByPoint(vt),vt.addVectors(It.max,bi.max),It.expandByPoint(vt)):(It.expandByPoint(bi.min),It.expandByPoint(bi.max))}It.getCenter(r);let n=0;for(let i=0,s=e.count;i<s;i++)vt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(vt));if(t)for(let i=0,s=t.length;i<s;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)vt.fromBufferAttribute(o,c),l&&(Zn.fromBufferAttribute(e,c),vt.add(Zn)),n=Math.max(n,r.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<r.count;U++)o[U]=new te,l[U]=new te;const c=new te,u=new te,f=new te,h=new et,d=new et,g=new et,_=new te,m=new te;function p(U,M,S){c.fromBufferAttribute(r,U),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,S),h.fromBufferAttribute(i,U),d.fromBufferAttribute(i,M),g.fromBufferAttribute(i,S),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),o[U].add(_),o[M].add(_),o[S].add(_),l[U].add(m),l[M].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let U=0,M=y.length;U<M;++U){const S=y[U],P=S.start,w=S.count;for(let I=P,L=P+w;I<L;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const E=new te,x=new te,R=new te,C=new te;function A(U){R.fromBufferAttribute(n,U),C.copy(R);const M=o[U];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),x.crossVectors(C,M);const P=x.dot(l[U])<0?-1:1;s.setXYZW(U,E.x,E.y,E.z,P)}for(let U=0,M=y.length;U<M;++U){const S=y[U],P=S.start,w=S.count;for(let I=P,L=P+w;I<L;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,d=r.count;h<d;h++)r.setXYZ(h,0,0,0);const n=new te,i=new te,s=new te,o=new te,l=new te,c=new te,u=new te,f=new te;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,i),f.subVectors(n,i),u.cross(f),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,m),o.add(u),l.add(u),c.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)n.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,i),f.subVectors(n,i),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new $t(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,r);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],f=i[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $a=new ft,bn=new Ta,Qi=new si,es=new te,$i=new te,er=new te,tr=new te,ia=new te,nr=new te,ts=new te,ir=new te;class Ht extends Ut{constructor(e=new rn,t=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){nr.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=o[l],f=i[l];u!==0&&(ia.fromBufferAttribute(f,e),s?nr.addScaledVector(ia,u):nr.addScaledVector(ia.sub(t),u))}t.add(nr)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Qi.copy(r.boundingSphere),Qi.applyMatrix4(i),bn.copy(e.ray).recast(e.near),!(Qi.containsPoint(bn.origin)===!1&&(bn.intersectSphere(Qi,es)===null||bn.origin.distanceToSquared(es)>(e.far-e.near)**2))&&($a.copy(i).invert(),bn.copy(e.ray).applyMatrix4($a),!(r.boundingBox!==null&&bn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,bn)))}_computeIntersections(e,t,r){let n;const i=this.geometry,s=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,f=i.attributes.normal,h=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=s[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,R=E;x<R;x+=3){const C=o.getX(x),A=o.getX(x+1),U=o.getX(x+2);n=rr(this,p,e,r,c,u,f,C,A,U),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);n=rr(this,s,e,r,c,u,f,y,E,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=s[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,R=E;x<R;x+=3){const C=x,A=x+1,U=x+2;n=rr(this,p,e,r,c,u,f,C,A,U),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,E=m+1,x=m+2;n=rr(this,s,e,r,c,u,f,y,E,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Xo(a,e,t,r,n,i,s,o){let l;if(e.side===1?l=r.intersectTriangle(s,i,n,!0,o):l=r.intersectTriangle(n,i,s,e.side===0,o),l===null)return null;ir.copy(o),ir.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(ir);return c<t.near||c>t.far?null:{distance:c,point:ir.clone(),object:a}}function rr(a,e,t,r,n,i,s,o,l,c){a.getVertexPosition(o,$i),a.getVertexPosition(l,er),a.getVertexPosition(c,tr);const u=Xo(a,e,t,r,$i,er,tr,ts);if(u){const f=new te;Qt.getBarycoord(ts,$i,er,tr,f),n&&(u.uv=Qt.getInterpolatedAttribute(n,o,l,c,f,new et)),i&&(u.uv1=Qt.getInterpolatedAttribute(i,o,l,c,f,new et)),s&&(u.normal=Qt.getInterpolatedAttribute(s,o,l,c,f,new te),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new te,materialIndex:0};Qt.getNormal($i,er,tr,h.normal),u.face=h,u.barycoord=f}return u}class Ii extends rn{constructor(e=1,t=1,r=1,n=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:s};const o=this;n=Math.floor(n),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,r,t,e,s,i,0),g("z","y","x",1,-1,r,t,-e,s,i,1),g("x","z","y",1,1,e,r,t,n,s,2),g("x","z","y",1,-1,e,r,-t,n,s,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(u,3)),this.setAttribute("uv",new Mn(f,2));function g(_,m,p,y,E,x,R,C,A,U,M){const S=x/A,P=R/U,w=x/2,I=R/2,L=C/2,V=A+1,z=U+1;let ne=0,W=0;const K=new te;for(let Y=0;Y<z;Y++){const F=Y*P-I;for(let H=0;H<V;H++){const Q=H*S-w;K[_]=Q*y,K[m]=F*E,K[p]=L,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=C>0?1:-1,u.push(K.x,K.y,K.z),f.push(H/A),f.push(1-Y/U),ne+=1}}for(let Y=0;Y<U;Y++)for(let F=0;F<A;F++){const H=h+F+V*Y,Q=h+F+V*(Y+1),ee=h+(F+1)+V*(Y+1),j=h+(F+1)+V*Y;l.push(H,Q,j),l.push(Q,ee,j),W+=6}o.addGroup(d,W,M),d+=W,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ri(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const n=a[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Ct(a){const e={};for(let t=0;t<a.length;t++){const r=ri(a[t]);for(const n in r)e[n]=r[n]}return e}function qo(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function $s(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const eo={clone:ri,merge:Ct};var Yo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ko=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yo,this.fragmentShader=Ko,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ri(e.uniforms),this.uniformsGroups=qo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class to extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new te,ns=new et,is=new et;class Jt extends to{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z)}getViewSize(e,t){return this.getViewBounds(e,ns,is),t.subVectors(is,ns)}setViewOffset(e,t,r,n,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*n/l,t-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jn=-90,Qn=1;class jo extends Ut{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Jt(Jn,Qn,e,t);n.layers=this.layers,this.add(n);const i=new Jt(Jn,Qn,e,t);i.layers=this.layers,this.add(i);const s=new Jt(Jn,Qn,e,t);s.layers=this.layers,this.add(s);const o=new Jt(Jn,Qn,e,t);o.layers=this.layers,this.add(o);const l=new Jt(Jn,Qn,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Jn,Qn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,s,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class no extends wt{constructor(e=[],t=301,r,n,i,s,o,l,c,u){super(e,t,r,n,i,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zo extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new no(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ii(5,5,5),i=new En({name:"CubemapFromEquirect",uniforms:ri(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;const s=new Ht(n,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new jo(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,r=!0,n=!0){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(i)}}class ar extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jo={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,r),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jo)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ar;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class kd extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qo extends $t{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const aa=new te,$o=new te,el=new qe;class Un{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=aa.subVectors(r,t).cross($o.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(aa),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||el.getNormalMatrix(e),n=this.coplanarPoint(aa).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new si,tl=new et(.5,.5),sr=new te;class io{constructor(e=new Un,t=new Un,r=new Un,n=new Un,i=new Un,s=new Un){this.planes=[e,t,r,n,i,s]}set(e,t,r,n,i,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=2e3,r=!1){const n=this.planes,i=e.elements,s=i[0],o=i[1],l=i[2],c=i[3],u=i[4],f=i[5],h=i[6],d=i[7],g=i[8],_=i[9],m=i[10],p=i[11],y=i[12],E=i[13],x=i[14],R=i[15];if(n[0].setComponents(c-s,d-u,p-g,R-y).normalize(),n[1].setComponents(c+s,d+u,p+g,R+y).normalize(),n[2].setComponents(c+o,d+f,p+_,R+E).normalize(),n[3].setComponents(c-o,d-f,p-_,R-E).normalize(),r)n[4].setComponents(l,h,m,x).normalize(),n[5].setComponents(c-l,d-h,p-m,R-x).normalize();else if(n[4].setComponents(c-l,d-h,p-m,R-x).normalize(),t===2e3)n[5].setComponents(c+l,d+h,p+m,R+x).normalize();else if(t===2001)n[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(e){An.center.set(0,0,0);const t=tl.distanceTo(e.center);return An.radius=.7071067811865476+t,An.applyMatrix4(e.matrixWorld),this.intersectsSphere(An)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(sr.x=n.normal.x>0?e.max.x:e.min.x,sr.y=n.normal.y>0?e.max.y:e.min.y,sr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nl extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mr=new te,Er=new te,rs=new ft,Ai=new Ta,or=new si,sa=new te,as=new te;class zd extends Ut{constructor(e=new rn,t=new nl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,i=t.count;n<i;n++)Mr.fromBufferAttribute(t,n-1),Er.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=Mr.distanceTo(Er);e.setAttribute("lineDistance",new Mn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),or.copy(r.boundingSphere),or.applyMatrix4(n),or.radius+=i,e.ray.intersectsSphere(or)===!1)return;rs.copy(n).invert(),Ai.copy(e.ray).applyMatrix4(rs);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=r.index,h=r.attributes.position;if(u!==null){const d=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),E=lr(this,e,Ai,l,p,y,_);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=lr(this,e,Ai,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let _=d,m=g-1;_<m;_+=c){const p=lr(this,e,Ai,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=lr(this,e,Ai,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function lr(a,e,t,r,n,i,s){const o=a.geometry.attributes.position;if(Mr.fromBufferAttribute(o,n),Er.fromBufferAttribute(o,i),t.distanceSqToSegment(Mr,Er,sa,as)>r)return;sa.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(sa);if(!(c<e.near||c>e.far))return{distance:c,point:as.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}class il extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ss=new ft,_a=new Ta,cr=new si,ur=new te;class Vd extends Ut{constructor(e=new rn,t=new il){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),cr.copy(r.boundingSphere),cr.applyMatrix4(n),cr.radius+=i,e.ray.intersectsSphere(cr)===!1)return;ss.copy(n).invert(),_a.copy(e.ray).applyMatrix4(ss);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=r.index,f=r.attributes.position;if(c!==null){const h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);ur.fromBufferAttribute(f,m),os(ur,m,l,n,e,t,this)}}else{const h=Math.max(0,s.start),d=Math.min(f.count,s.start+s.count);for(let g=h,_=d;g<_;g++)ur.fromBufferAttribute(f,g),os(ur,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function os(a,e,t,r,n,i,s){const o=_a.distanceSqToPoint(a);if(o<t){const l=new te;_a.closestPointToPoint(a,l),l.applyMatrix4(r);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;i.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class ro extends wt{constructor(e,t,r=1014,n,i,s,o=1003,l=1003,c,u=1026,f=1){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,n,i,s,o,l,u,r,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ya(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ao extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nn extends rn{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,s=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-s;for(let E=0;E<c;E++){const x=E*f-i;g.push(x,-y,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const E=y+c*p,x=y+c*(p+1),R=y+1+c*(p+1),C=y+1+c*p;d.push(E,x,C),d.push(x,R,C)}this.setIndex(d),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.widthSegments,e.heightSegments)}}class so extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oo extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rl extends to{constructor(e=-1,t=1,r=1,n=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,s=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class al extends rn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class sl extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ls(a,e,t,r){const n=ol(r);switch(t){case 1021:return a*e;case 1028:return a*e/n.components*n.byteLength;case 1029:return a*e/n.components*n.byteLength;case 1030:return a*e*2/n.components*n.byteLength;case 1031:return a*e*2/n.components*n.byteLength;case 1022:return a*e*3/n.components*n.byteLength;case 1023:return a*e*4/n.components*n.byteLength;case 1033:return a*e*4/n.components*n.byteLength;case 33776:case 33777:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(a,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(a,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(a/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(a/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ol(a){switch(a){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lo(){let a=null,e=!1,t=null,r=null;function n(i,s){t(i,s),r=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function ll(a){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=a.createBuffer();a.bindBuffer(l,h),a.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function r(o,l,c){const u=l.array,f=l.updateRanges;if(a.bindBuffer(c,o),f.length===0)a.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];a.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:i,update:s}}var cl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ul=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ml=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_l=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ml=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,El=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Al=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ul=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ll=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Il=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ol=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gl="gl_FragColor = linearToOutputTexel( gl_FragColor );",kl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ql=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ql=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$l=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ec=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ic=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ac=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_c=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ec=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ac=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ic=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$c=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ou=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,du=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_u=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Su=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Au=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ru=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Du=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ku=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:cl,alphahash_pars_fragment:ul,alphamap_fragment:fl,alphamap_pars_fragment:hl,alphatest_fragment:dl,alphatest_pars_fragment:pl,aomap_fragment:ml,aomap_pars_fragment:gl,batching_pars_vertex:_l,batching_vertex:vl,begin_vertex:xl,beginnormal_vertex:Sl,bsdfs:Ml,iridescence_fragment:El,bumpmap_pars_fragment:yl,clipping_planes_fragment:Tl,clipping_planes_pars_fragment:bl,clipping_planes_pars_vertex:Al,clipping_planes_vertex:Rl,color_fragment:Cl,color_pars_fragment:wl,color_pars_vertex:Ul,color_vertex:Dl,common:Pl,cube_uv_reflection_fragment:Fl,defaultnormal_vertex:Ll,displacementmap_pars_vertex:Il,displacementmap_vertex:Nl,emissivemap_fragment:Ol,emissivemap_pars_fragment:Bl,colorspace_fragment:Gl,colorspace_pars_fragment:kl,envmap_fragment:zl,envmap_common_pars_fragment:Vl,envmap_pars_fragment:Hl,envmap_pars_vertex:Wl,envmap_physical_pars_fragment:tc,envmap_vertex:Xl,fog_vertex:ql,fog_pars_vertex:Yl,fog_fragment:Kl,fog_pars_fragment:jl,gradientmap_pars_fragment:Zl,lightmap_pars_fragment:Jl,lights_lambert_fragment:Ql,lights_lambert_pars_fragment:$l,lights_pars_begin:ec,lights_toon_fragment:nc,lights_toon_pars_fragment:ic,lights_phong_fragment:rc,lights_phong_pars_fragment:ac,lights_physical_fragment:sc,lights_physical_pars_fragment:oc,lights_fragment_begin:lc,lights_fragment_maps:cc,lights_fragment_end:uc,logdepthbuf_fragment:fc,logdepthbuf_pars_fragment:hc,logdepthbuf_pars_vertex:dc,logdepthbuf_vertex:pc,map_fragment:mc,map_pars_fragment:gc,map_particle_fragment:_c,map_particle_pars_fragment:vc,metalnessmap_fragment:xc,metalnessmap_pars_fragment:Sc,morphinstance_vertex:Mc,morphcolor_vertex:Ec,morphnormal_vertex:yc,morphtarget_pars_vertex:Tc,morphtarget_vertex:bc,normal_fragment_begin:Ac,normal_fragment_maps:Rc,normal_pars_fragment:Cc,normal_pars_vertex:wc,normal_vertex:Uc,normalmap_pars_fragment:Dc,clearcoat_normal_fragment_begin:Pc,clearcoat_normal_fragment_maps:Fc,clearcoat_pars_fragment:Lc,iridescence_pars_fragment:Ic,opaque_fragment:Nc,packing:Oc,premultiplied_alpha_fragment:Bc,project_vertex:Gc,dithering_fragment:kc,dithering_pars_fragment:zc,roughnessmap_fragment:Vc,roughnessmap_pars_fragment:Hc,shadowmap_pars_fragment:Wc,shadowmap_pars_vertex:Xc,shadowmap_vertex:qc,shadowmask_pars_fragment:Yc,skinbase_vertex:Kc,skinning_pars_vertex:jc,skinning_vertex:Zc,skinnormal_vertex:Jc,specularmap_fragment:Qc,specularmap_pars_fragment:$c,tonemapping_fragment:eu,tonemapping_pars_fragment:tu,transmission_fragment:nu,transmission_pars_fragment:iu,uv_pars_fragment:ru,uv_pars_vertex:au,uv_vertex:su,worldpos_vertex:ou,background_vert:lu,background_frag:cu,backgroundCube_vert:uu,backgroundCube_frag:fu,cube_vert:hu,cube_frag:du,depth_vert:pu,depth_frag:mu,distanceRGBA_vert:gu,distanceRGBA_frag:_u,equirect_vert:vu,equirect_frag:xu,linedashed_vert:Su,linedashed_frag:Mu,meshbasic_vert:Eu,meshbasic_frag:yu,meshlambert_vert:Tu,meshlambert_frag:bu,meshmatcap_vert:Au,meshmatcap_frag:Ru,meshnormal_vert:Cu,meshnormal_frag:wu,meshphong_vert:Uu,meshphong_frag:Du,meshphysical_vert:Pu,meshphysical_frag:Fu,meshtoon_vert:Lu,meshtoon_frag:Iu,points_vert:Nu,points_frag:Ou,shadow_vert:Bu,shadow_frag:Gu,sprite_vert:ku,sprite_frag:zu},De={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},nn={basic:{uniforms:Ct([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ct([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ct([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ct([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ct([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ct([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ct([De.points,De.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ct([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ct([De.common,De.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ct([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ct([De.sprite,De.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Ct([De.common,De.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Ct([De.lights,De.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};nn.physical={uniforms:Ct([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const fr={r:0,b:0,g:0},Rn=new fn,Vu=new ft;function Hu(a,e,t,r,n,i,s){const o=new Je(0);let l=i===!0?0:1,c,u,f=null,h=0,d=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function _(E){let x=!1;const R=g(E);R===null?p(o,l):R&&R.isColor&&(p(R,1),x=!0);const C=a.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(a.autoClear||x)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function m(E,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===306)?(u===void 0&&(u=new Ht(new Ii(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:ri(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Rn.copy(x.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vu.makeRotationFromEuler(Rn)),u.material.toneMapped=$e.getTransfer(R.colorSpace)!==it,(f!==R||h!==R.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,f=R,h=R.version,d=a.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Ht(new Nn(2,2),new En({name:"BackgroundMaterial",uniforms:ri(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=$e.getTransfer(R.colorSpace)!==it,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,d=a.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(fr,$s(a)),r.buffers.color.setClear(fr.r,fr.g,fr.b,x,s)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m,dispose:y}}function Wu(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},n=h(null);let i=n,s=!1;function o(S,P,w,I,L){let V=!1;const z=f(I,w,P);i!==z&&(i=z,c(i.object)),V=d(S,I,w,L),V&&g(S,I,w,L),L!==null&&e.update(L,a.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,x(S,P,w,I),L!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return a.createVertexArray()}function c(S){return a.bindVertexArray(S)}function u(S){return a.deleteVertexArray(S)}function f(S,P,w){const I=w.wireframe===!0;let L=r[S.id];L===void 0&&(L={},r[S.id]=L);let V=L[P.id];V===void 0&&(V={},L[P.id]=V);let z=V[I];return z===void 0&&(z=h(l()),V[I]=z),z}function h(S){const P=[],w=[],I=[];for(let L=0;L<t;L++)P[L]=0,w[L]=0,I[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:w,attributeDivisors:I,object:S,attributes:{},index:null}}function d(S,P,w,I){const L=i.attributes,V=P.attributes;let z=0;const ne=w.getAttributes();for(const W in ne)if(ne[W].location>=0){const Y=L[W];let F=V[W];if(F===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(F=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(F=S.instanceColor)),Y===void 0||Y.attribute!==F||F&&Y.data!==F.data)return!0;z++}return i.attributesNum!==z||i.index!==I}function g(S,P,w,I){const L={},V=P.attributes;let z=0;const ne=w.getAttributes();for(const W in ne)if(ne[W].location>=0){let Y=V[W];Y===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor));const F={};F.attribute=Y,Y&&Y.data&&(F.data=Y.data),L[W]=F,z++}i.attributes=L,i.attributesNum=z,i.index=I}function _(){const S=i.newAttributes;for(let P=0,w=S.length;P<w;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const w=i.newAttributes,I=i.enabledAttributes,L=i.attributeDivisors;w[S]=1,I[S]===0&&(a.enableVertexAttribArray(S),I[S]=1),L[S]!==P&&(a.vertexAttribDivisor(S,P),L[S]=P)}function y(){const S=i.newAttributes,P=i.enabledAttributes;for(let w=0,I=P.length;w<I;w++)P[w]!==S[w]&&(a.disableVertexAttribArray(w),P[w]=0)}function E(S,P,w,I,L,V,z){z===!0?a.vertexAttribIPointer(S,P,w,L,V):a.vertexAttribPointer(S,P,w,I,L,V)}function x(S,P,w,I){_();const L=I.attributes,V=w.getAttributes(),z=P.defaultAttributeValues;for(const ne in V){const W=V[ne];if(W.location>=0){let K=L[ne];if(K===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const Y=K.normalized,F=K.itemSize,H=e.get(K);if(H===void 0)continue;const Q=H.buffer,ee=H.type,j=H.bytesPerElement,k=ee===a.INT||ee===a.UNSIGNED_INT||K.gpuType===1013;if(K.isInterleavedBufferAttribute){const G=K.data,Z=G.stride,de=K.offset;if(G.isInstancedInterleavedBuffer){for(let pe=0;pe<W.locationSize;pe++)p(W.location+pe,G.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let pe=0;pe<W.locationSize;pe++)m(W.location+pe);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let pe=0;pe<W.locationSize;pe++)E(W.location+pe,F/W.locationSize,ee,Y,Z*j,(de+F/W.locationSize*pe)*j,k)}else{if(K.isInstancedBufferAttribute){for(let G=0;G<W.locationSize;G++)p(W.location+G,K.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let G=0;G<W.locationSize;G++)m(W.location+G);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let G=0;G<W.locationSize;G++)E(W.location+G,F/W.locationSize,ee,Y,F*j,F/W.locationSize*G*j,k)}}else if(z!==void 0){const Y=z[ne];if(Y!==void 0)switch(Y.length){case 2:a.vertexAttrib2fv(W.location,Y);break;case 3:a.vertexAttrib3fv(W.location,Y);break;case 4:a.vertexAttrib4fv(W.location,Y);break;default:a.vertexAttrib1fv(W.location,Y)}}}}y()}function R(){U();for(const S in r){const P=r[S];for(const w in P){const I=P[w];for(const L in I)u(I[L].object),delete I[L];delete P[w]}delete r[S]}}function C(S){if(r[S.id]===void 0)return;const P=r[S.id];for(const w in P){const I=P[w];for(const L in I)u(I[L].object),delete I[L];delete P[w]}delete r[S.id]}function A(S){for(const P in r){const w=r[P];if(w[S.id]===void 0)continue;const I=w[S.id];for(const L in I)u(I[L].object),delete I[L];delete w[S.id]}}function U(){M(),s=!0,i!==n&&(i=n,c(i.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Xu(a,e,t){let r;function n(c){r=c}function i(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function s(c,u,f){f!==0&&(a.drawArraysInstanced(r,c,u,f),t.update(u,r,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,r,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)s(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(r,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,r,1)}}this.setMode=n,this.render=i,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function qu(a,e,t,r){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){return!(A!==1023&&r.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const U=A===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==1009&&r.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==1015&&!U)}function l(A){if(A==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),y=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),E=a.getParameter(a.MAX_VARYING_VECTORS),x=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:R,maxSamples:C}}function Yu(a){const e=this;let t=null,r=0,n=!1,i=!1;const s=new Un,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||r!==0||n;return n=h,r=f.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=a.get(f);if(!n||g===null||g.length===0||i&&!m)i?u(null):c();else{const y=i?0:r,E=y*4;let x=p.clippingState||null;l.value=x,x=u(g,h,E,d);for(let R=0;R!==E;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=d;E!==_;++E,x+=4)s.copy(f[E]).applyMatrix4(y,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ku(a){let e=new WeakMap;function t(s,o){return o===303?s.mapping=301:o===304&&(s.mapping=302),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===303||o===304)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Zo(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}const ti=4,cs=[.125,.215,.35,.446,.526,.582],Pn=20,oa=new rl,us=new Je;let la=null,ca=0,ua=0,fa=!1;const Dn=(1+Math.sqrt(5))/2,$n=1/Dn,fs=[new te(-Dn,$n,0),new te(Dn,$n,0),new te(-$n,0,Dn),new te($n,0,Dn),new te(0,Dn,-$n),new te(0,Dn,$n),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)],ju=new te;class hs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100,i={}){const{size:s=256,position:o=ju}=i;la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ms(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ps(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la,ca,ua),this._renderer.xr.enabled=fa,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:ii,depthBuffer:!1},n=ds(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ds(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zu(i)),this._blurMaterial=Ju(i,e,t)}return n}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,r,n,i){const l=new Jt(90,1,t,r),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(us),f.toneMapping=0,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null));const _=new ba({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new Ht(new Ii,_);let p=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(us),p=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x+u[E],i.y,i.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y+u[E],i.z)):(l.up.set(0,c[E],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y,i.z+u[E]));const R=this._cubeSize;hr(n,x*R,E>2?R:0,R,R),f.setRenderTarget(n),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===301||e.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ms()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ps());const i=n?this._cubemapMaterial:this._equirectMaterial,s=new Ht(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;hr(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,oa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let i=1;i<n;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=fs[(n-i-1)%fs.length];this._blur(e,i-1,i,s,o)}t.autoClear=r}_blur(e,t,r,n,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",i),this._halfBlur(s,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ht(this._lodPlanes[n],c),h=c.uniforms,d=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Pn-1),_=i/g,m=isFinite(i)?1+Math.floor(u*_):Pn;m>Pn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pn}`);const p=[];let y=0;for(let A=0;A<Pn;++A){const U=A/_,M=Math.exp(-U*U/2);p.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-r;const x=this._sizeLods[n],R=3*x*(n>E-ti?n-E+ti:0),C=4*(this._cubeSize-x);hr(t,R,C,3*x,2*x),l.setRenderTarget(t),l.render(f,oa)}}function Zu(a){const e=[],t=[],r=[];let n=a;const i=a-ti+1+cs.length;for(let s=0;s<i;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>a-ti?l=cs[s-a+ti-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),E=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let C=0;C<d;C++){const A=C%3*2/3-1,U=C>2?0:-1,M=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];y.set(M,_*g*C),E.set(h,m*g*C);const S=[C,C,C,C,C,C];x.set(S,p*g*C)}const R=new rn;R.setAttribute("position",new $t(y,_)),R.setAttribute("uv",new $t(E,m)),R.setAttribute("faceIndex",new $t(x,p)),e.push(R),n>ti&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function ds(a,e,t){const r=new Ln(a,e,t);return r.texture.mapping=306,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hr(a,e,t,r,n){a.viewport.set(e,t,r,n),a.scissor.set(e,t,r,n)}function Ju(a,e,t){const r=new Float32Array(Pn),n=new te(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ps(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ms(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qu(a){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new hs(a)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new hs(a)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",i),f.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function $u(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&Pi("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function ef(a,e,t,r){const n={},i=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete n[h.id];const d=i.get(h);d&&(e.remove(d),i.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],a.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let E=0,x=y.length;E<x;E+=3){const R=y[E+0],C=y[E+1],A=y[E+2];h.push(R,C,C,A,A,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,x=y.length/3-1;E<x;E+=3){const R=E+0,C=E+1,A=E+2;h.push(R,C,C,A,A,R)}}else return;const m=new(Ys(h)?Qs:Js)(h,1);m.version=_;const p=i.get(f);p&&e.remove(p),i.set(f,m)}function u(f){const h=i.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return i.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function tf(a,e,t){let r;function n(h){r=h}let i,s;function o(h){i=h.type,s=h.bytesPerElement}function l(h,d){a.drawElements(r,d,i,h*s),t.update(d,r,1)}function c(h,d,g){g!==0&&(a.drawElementsInstanced(r,d,i,h*s,g),t.update(d,r,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,i,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,r,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/s,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(r,d,0,i,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];t.update(p,r,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function nf(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(i/3);break;case a.LINES:t.lines+=o*(i/2);break;case a.LINE_STRIP:t.lines+=o*(i-1);break;case a.LINE_LOOP:t.lines+=o*i;break;case a.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function rf(a,e,t){const r=new WeakMap,n=new ct;function i(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=r.get(o);if(h===void 0||h.count!==f){let M=function(){A.dispose(),r.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let x=o.attributes.position.count*E,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const C=new Float32Array(x*R*4*f),A=new Ks(C,x,R,f);A.type=1015,A.needsUpdate=!0;const U=E*4;for(let S=0;S<f;S++){const P=m[S],w=p[S],I=y[S],L=x*R*4*S;for(let V=0;V<P.count;V++){const z=V*U;d===!0&&(n.fromBufferAttribute(P,V),C[L+z+0]=n.x,C[L+z+1]=n.y,C[L+z+2]=n.z,C[L+z+3]=0),g===!0&&(n.fromBufferAttribute(w,V),C[L+z+4]=n.x,C[L+z+5]=n.y,C[L+z+6]=n.z,C[L+z+7]=0),_===!0&&(n.fromBufferAttribute(I,V),C[L+z+8]=n.x,C[L+z+9]=n.y,C[L+z+10]=n.z,C[L+z+11]=I.itemSize===4?n.w:1)}}h={count:f,texture:A,size:new et(x,R)},r.set(o,h),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(a,"morphTargetBaseInfluence",g),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}return{update:i}}function af(a,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:s}}const co=new wt,gs=new ro(1,1),uo=new Ks,fo=new Lo,ho=new no,_s=[],vs=[],xs=new Float32Array(16),Ss=new Float32Array(9),Ms=new Float32Array(4);function li(a,e,t){const r=a[0];if(r<=0||r>0)return a;const n=e*t;let i=_s[n];if(i===void 0&&(i=new Float32Array(n),_s[n]=i),e!==0){r.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(i,o)}return i}function gt(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function _t(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function yr(a,e){let t=vs[e];t===void 0&&(t=new Int32Array(e),vs[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function sf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function of(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;a.uniform2fv(this.addr,e),_t(t,e)}}function lf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;a.uniform3fv(this.addr,e),_t(t,e)}}function cf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;a.uniform4fv(this.addr,e),_t(t,e)}}function uf(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(gt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,r))return;Ms.set(r),a.uniformMatrix2fv(this.addr,!1,Ms),_t(t,r)}}function ff(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(gt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,r))return;Ss.set(r),a.uniformMatrix3fv(this.addr,!1,Ss),_t(t,r)}}function hf(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(gt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,r))return;xs.set(r),a.uniformMatrix4fv(this.addr,!1,xs),_t(t,r)}}function df(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function pf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;a.uniform2iv(this.addr,e),_t(t,e)}}function mf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;a.uniform3iv(this.addr,e),_t(t,e)}}function gf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;a.uniform4iv(this.addr,e),_t(t,e)}}function _f(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function vf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;a.uniform2uiv(this.addr,e),_t(t,e)}}function xf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;a.uniform3uiv(this.addr,e),_t(t,e)}}function Sf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;a.uniform4uiv(this.addr,e),_t(t,e)}}function Mf(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n);let i;this.type===a.SAMPLER_2D_SHADOW?(gs.compareFunction=515,i=gs):i=co,t.setTexture2D(e||i,n)}function Ef(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||fo,n)}function yf(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||ho,n)}function Tf(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||uo,n)}function bf(a){switch(a){case 5126:return sf;case 35664:return of;case 35665:return lf;case 35666:return cf;case 35674:return uf;case 35675:return ff;case 35676:return hf;case 5124:case 35670:return df;case 35667:case 35671:return pf;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return _f;case 36294:return vf;case 36295:return xf;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Ef;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return Tf}}function Af(a,e){a.uniform1fv(this.addr,e)}function Rf(a,e){const t=li(e,this.size,2);a.uniform2fv(this.addr,t)}function Cf(a,e){const t=li(e,this.size,3);a.uniform3fv(this.addr,t)}function wf(a,e){const t=li(e,this.size,4);a.uniform4fv(this.addr,t)}function Uf(a,e){const t=li(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Df(a,e){const t=li(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Pf(a,e){const t=li(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Ff(a,e){a.uniform1iv(this.addr,e)}function Lf(a,e){a.uniform2iv(this.addr,e)}function If(a,e){a.uniform3iv(this.addr,e)}function Nf(a,e){a.uniform4iv(this.addr,e)}function Of(a,e){a.uniform1uiv(this.addr,e)}function Bf(a,e){a.uniform2uiv(this.addr,e)}function Gf(a,e){a.uniform3uiv(this.addr,e)}function kf(a,e){a.uniform4uiv(this.addr,e)}function zf(a,e,t){const r=this.cache,n=e.length,i=yr(t,n);gt(r,i)||(a.uniform1iv(this.addr,i),_t(r,i));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||co,i[s])}function Vf(a,e,t){const r=this.cache,n=e.length,i=yr(t,n);gt(r,i)||(a.uniform1iv(this.addr,i),_t(r,i));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||fo,i[s])}function Hf(a,e,t){const r=this.cache,n=e.length,i=yr(t,n);gt(r,i)||(a.uniform1iv(this.addr,i),_t(r,i));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||ho,i[s])}function Wf(a,e,t){const r=this.cache,n=e.length,i=yr(t,n);gt(r,i)||(a.uniform1iv(this.addr,i),_t(r,i));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||uo,i[s])}function Xf(a){switch(a){case 5126:return Af;case 35664:return Rf;case 35665:return Cf;case 35666:return wf;case 35674:return Uf;case 35675:return Df;case 35676:return Pf;case 5124:case 35670:return Ff;case 35667:case 35671:return Lf;case 35668:case 35672:return If;case 35669:case 35673:return Nf;case 5125:return Of;case 36294:return Bf;case 36295:return Gf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return Wf}}class qf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=bf(t.type)}}class Yf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xf(t.type)}}class Kf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function Es(a,e){a.seq.push(e),a.map[e.id]=e}function jf(a,e,t){const r=a.name,n=r.length;for(ha.lastIndex=0;;){const i=ha.exec(r),s=ha.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Es(t,c===void 0?new qf(o,a,e):new Yf(o,a,e));break}else{let f=t.map[o];f===void 0&&(f=new Kf(o),Es(t,f)),t=f}}}class gr{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),s=e.getUniformLocation(t,i.name);jf(i,s,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,s=t.length;i!==s;++i){const o=t[i],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function ys(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const Zf=37297;let Jf=0;function Qf(a,e){const t=a.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=n;s<i;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}const Ts=new qe;function $f(a){$e._getMatrix(Ts,$e.workingColorSpace,a);const e=`mat3( ${Ts.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(a)){case xr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function bs(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),i=(a.getShaderInfoLog(e)||"").trim();if(r&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Qf(a.getShaderSource(e),o)}else return i}function eh(a,e){const t=$f(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function th(a,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dr=new te;function nh(){$e.getLuminanceCoefficients(dr);const a=dr.x.toFixed(4),e=dr.y.toFixed(4),t=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ih(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ci).join(`
`)}function rh(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function ah(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=a.getActiveAttrib(e,n),s=i.name;let o=1;i.type===a.FLOAT_MAT2&&(o=2),i.type===a.FLOAT_MAT3&&(o=3),i.type===a.FLOAT_MAT4&&(o=4),t[s]={type:i.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function Ci(a){return a!==""}function As(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rs(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sh=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(a){return a.replace(sh,lh)}const oh=new Map;function lh(a,e){let t=Ye[e];if(t===void 0){const r=oh.get(e);if(r!==void 0)t=Ye[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return va(t)}const ch=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cs(a){return a.replace(ch,uh)}function uh(a,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function ws(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fh(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function hh(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dh(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function ph(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function mh(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function gh(a,e,t,r){const n=a.getContext(),i=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=fh(t),c=hh(t),u=dh(t),f=ph(t),h=mh(t),d=ih(t),g=rh(i),_=n.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ci).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ci).join(`
`),p.length>0&&(p+=`
`)):(m=[ws(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),p=[ws(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ye.tonemapping_pars_fragment:"",t.toneMapping!==0?th("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,eh("linearToOutputTexel",t.outputColorSpace),nh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ci).join(`
`)),s=va(s),s=As(s,t),s=Rs(s,t),o=va(o),o=As(o,t),o=Rs(o,t),s=Cs(s),o=Cs(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+s,x=y+p+o,R=ys(n,n.VERTEX_SHADER,E),C=ys(n,n.FRAGMENT_SHADER,x);n.attachShader(_,R),n.attachShader(_,C),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function A(P){if(a.debug.checkShaderErrors){const w=n.getProgramInfoLog(_)||"",I=n.getShaderInfoLog(R)||"",L=n.getShaderInfoLog(C)||"",V=w.trim(),z=I.trim(),ne=L.trim();let W=!0,K=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(W=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,_,R,C);else{const Y=bs(n,R,"vertex"),F=bs(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+Y+`
`+F)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||ne==="")&&(K=!1);K&&(P.diagnostics={runnable:W,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:ne,prefix:p}})}n.deleteShader(R),n.deleteShader(C),U=new gr(n,_),M=ah(n,_)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(_,Zf)),S},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let _h=0;class vh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new xh(e),t.set(e,r)),r}}class xh{constructor(e){this.id=_h++,this.code=e,this.usedTimes=0}}function Sh(a,e,t,r,n,i,s){const o=new js,l=new vh,c=new Set,u=[],f=n.logarithmicDepthBuffer,h=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,P,w,I){const L=w.fog,V=I.geometry,z=M.isMeshStandardMaterial?w.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),W=ne&&ne.mapping===306?ne.image.height:null,K=g[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const Y=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,F=Y!==void 0?Y.length:0;let H=0;V.morphAttributes.position!==void 0&&(H=1),V.morphAttributes.normal!==void 0&&(H=2),V.morphAttributes.color!==void 0&&(H=3);let Q,ee,j,k;if(K){const He=nn[K];Q=He.vertexShader,ee=He.fragmentShader}else Q=M.vertexShader,ee=M.fragmentShader,l.update(M),j=l.getVertexShaderID(M),k=l.getFragmentShaderID(M);const G=a.getRenderTarget(),Z=a.state.buffers.depth.getReversed(),de=I.isInstancedMesh===!0,pe=I.isBatchedMesh===!0,he=!!M.map,ge=!!M.matcap,D=!!ne,Fe=!!M.aoMap,Me=!!M.lightMap,Ee=!!M.bumpMap,me=!!M.normalMap,xe=!!M.displacementMap,fe=!!M.emissiveMap,ye=!!M.metalnessMap,ce=!!M.roughnessMap,Ge=M.anisotropy>0,b=M.clearcoat>0,v=M.dispersion>0,O=M.iridescence>0,$=M.sheen>0,J=M.transmission>0,X=Ge&&!!M.anisotropyMap,Se=b&&!!M.clearcoatMap,le=b&&!!M.clearcoatNormalMap,Re=b&&!!M.clearcoatRoughnessMap,Ce=O&&!!M.iridescenceMap,oe=O&&!!M.iridescenceThicknessMap,_e=$&&!!M.sheenColorMap,Te=$&&!!M.sheenRoughnessMap,Ue=!!M.specularMap,be=!!M.specularColorMap,Ve=!!M.specularIntensityMap,B=J&&!!M.transmissionMap,se=J&&!!M.thicknessMap,ve=!!M.gradientMap,Le=!!M.alphaMap,ue=M.alphaTest>0,ie=!!M.alphaHash,we=!!M.extensions;let Ie=0;M.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ie=a.toneMapping);const Ne={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Q,fragmentShader:ee,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:k,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:pe,batchingColor:pe&&I._colorsTexture!==null,instancing:de,instancingColor:de&&I.instanceColor!==null,instancingMorph:de&&I.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:G===null?a.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ii,alphaToCoverage:!!M.alphaToCoverage,map:he,matcap:ge,envMap:D,envMapMode:D&&ne.mapping,envMapCubeUVHeight:W,aoMap:Fe,lightMap:Me,bumpMap:Ee,normalMap:me,displacementMap:h&&xe,emissiveMap:fe,normalMapObjectSpace:me&&M.normalMapType===1,normalMapTangentSpace:me&&M.normalMapType===0,metalnessMap:ye,roughnessMap:ce,anisotropy:Ge,anisotropyMap:X,clearcoat:b,clearcoatMap:Se,clearcoatNormalMap:le,clearcoatRoughnessMap:Re,dispersion:v,iridescence:O,iridescenceMap:Ce,iridescenceThicknessMap:oe,sheen:$,sheenColorMap:_e,sheenRoughnessMap:Te,specularMap:Ue,specularColorMap:be,specularIntensityMap:Ve,transmission:J,transmissionMap:B,thicknessMap:se,gradientMap:ve,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:Le,alphaTest:ue,alphaHash:ie,combine:M.combine,mapUv:he&&_(M.map.channel),aoMapUv:Fe&&_(M.aoMap.channel),lightMapUv:Me&&_(M.lightMap.channel),bumpMapUv:Ee&&_(M.bumpMap.channel),normalMapUv:me&&_(M.normalMap.channel),displacementMapUv:xe&&_(M.displacementMap.channel),emissiveMapUv:fe&&_(M.emissiveMap.channel),metalnessMapUv:ye&&_(M.metalnessMap.channel),roughnessMapUv:ce&&_(M.roughnessMap.channel),anisotropyMapUv:X&&_(M.anisotropyMap.channel),clearcoatMapUv:Se&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(M.sheenRoughnessMap.channel),specularMapUv:Ue&&_(M.specularMap.channel),specularColorMapUv:be&&_(M.specularColorMap.channel),specularIntensityMapUv:Ve&&_(M.specularIntensityMap.channel),transmissionMapUv:B&&_(M.transmissionMap.channel),thicknessMapUv:se&&_(M.thicknessMap.channel),alphaMapUv:Le&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(me||Ge),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(he||Le),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Z,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:H,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ie,decodeVideoTexture:he&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:fe&&M.emissiveMap.isVideoTexture===!0&&$e.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:we&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&M.extensions.multiDraw===!0||pe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(S,M),E(S,M),S.push(a.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function E(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const S=g[M.type];let P;if(S){const w=nn[S];P=eo.clone(w.uniforms)}else P=M.uniforms;return P}function R(M,S){let P;for(let w=0,I=u.length;w<I;w++){const L=u[w];if(L.cacheKey===S){P=L,++P.usedTimes;break}}return P===void 0&&(P=new gh(a,S,M,i),u.push(P)),P}function C(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:U}}function Mh(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function r(s){a.delete(s)}function n(s,o,l){a.get(s)[o]=l}function i(){a=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:i}}function Eh(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Us(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ds(){const a=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function s(f,h,d,g,_,m){let p=a[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},a[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,g,_,m){const p=s(f,h,d,g,_,m);d.transmission>0?r.push(p):d.transparent===!0?n.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=s(f,h,d,g,_,m);d.transmission>0?r.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Eh),r.length>1&&r.sort(h||Us),n.length>1&&n.sort(h||Us)}function u(){for(let f=e,h=a.length;f<h;f++){const d=a[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:l,finish:u,sort:c}}function yh(){let a=new WeakMap;function e(r,n){const i=a.get(r);let s;return i===void 0?(s=new Ds,a.set(r,[s])):n>=i.length?(s=new Ds,i.push(s)):s=i[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Th(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new Je};break;case"SpotLight":t={position:new te,direction:new te,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new te,halfWidth:new te,halfHeight:new te};break}return a[e.id]=t,t}}}function bh(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Ah=0;function Rh(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Ch(a){const e=new Th,t=bh(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new te);const n=new te,i=new ft,s=new ft;function o(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,E=0,x=0,R=0,C=0,A=0;c.sort(Rh);for(let M=0,S=c.length;M<S;M++){const P=c[M],w=P.color,I=P.intensity,L=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=w.r*I,f+=w.g*I,h+=w.b*I;else if(P.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(P.sh.coefficients[z],I);A++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ne=P.shadow,W=t.get(P);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,r.directionalShadow[d]=W,r.directionalShadowMap[d]=V,r.directionalShadowMatrix[d]=P.shadow.matrix,y++}r.directional[d]=z,d++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(w).multiplyScalar(I),z.distance=L,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,r.spot[_]=z;const ne=P.shadow;if(P.map&&(r.spotLightMap[R]=P.map,R++,ne.updateMatrices(P),P.castShadow&&C++),r.spotLightMatrix[_]=ne.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,r.spotShadow[_]=W,r.spotShadowMap[_]=V,x++}_++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(w).multiplyScalar(I),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),r.rectArea[m]=z,m++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const ne=P.shadow,W=t.get(P);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,W.shadowCameraNear=ne.camera.near,W.shadowCameraFar=ne.camera.far,r.pointShadow[g]=W,r.pointShadowMap[g]=V,r.pointShadowMatrix[g]=P.shadow.matrix,E++}r.point[g]=z,g++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(I),z.groundColor.copy(P.groundColor).multiplyScalar(I),r.hemi[p]=z,p++}}m>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=h;const U=r.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==y||U.numPointShadows!==E||U.numSpotShadows!==x||U.numSpotMaps!==R||U.numLightProbes!==A)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=x+R-C,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=A,U.directionalLength=d,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=y,U.numPointShadows=E,U.numSpotShadows=x,U.numSpotMaps=R,U.numLightProbes=A,r.version=Ah++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const E=c[p];if(E.isDirectionalLight){const x=r.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=r.spot[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const x=r.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),s.identity(),i.copy(E.matrixWorld),i.premultiply(m),s.extractRotation(i),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(E.isPointLight){const x=r.point[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const x=r.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:r}}function Ps(a){const e=new Ch(a),t=[],r=[];function n(u){c.camera=u,t.length=0,r.length=0}function i(u){t.push(u)}function s(u){r.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:s}}function wh(a){let e=new WeakMap;function t(n,i=0){const s=e.get(n);let o;return s===void 0?(o=new Ps(a),e.set(n,[o])):i>=s.length?(o=new Ps(a),s.push(o)):o=s[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const Uh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ph(a,e,t){let r=new io;const n=new et,i=new et,s=new ct,o=new so({depthPacking:3201}),l=new oo,c={},u=t.maxTextureSize,f={0:1,1:0,2:2},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Uh,fragmentShader:Dh}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ht(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(C,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=a.getRenderTarget(),S=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),w=a.state;w.setBlending(0),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const I=p!==3&&this.type===3,L=p===3&&this.type!==3;for(let V=0,z=C.length;V<z;V++){const ne=C[V],W=ne.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const K=W.getFrameExtents();if(n.multiply(K),i.copy(W.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/K.x),n.x=i.x*K.x,W.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/K.y),n.y=i.y*K.y,W.mapSize.y=i.y)),W.map===null||I===!0||L===!0){const F=this.type!==3?{minFilter:1003,magFilter:1003}:{};W.map!==null&&W.map.dispose(),W.map=new Ln(n.x,n.y,F),W.map.texture.name=ne.name+".shadowMap",W.camera.updateProjectionMatrix()}a.setRenderTarget(W.map),a.clear();const Y=W.getViewportCount();for(let F=0;F<Y;F++){const H=W.getViewport(F);s.set(i.x*H.x,i.y*H.y,i.x*H.z,i.y*H.w),w.viewport(s),W.updateMatrices(ne,F),r=W.getFrustum(),x(A,U,W.camera,ne,this.type)}W.isPointLightShadow!==!0&&this.type===3&&y(W,U),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(M,S,P)};function y(C,A){const U=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ln(n.x,n.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,a.setRenderTarget(C.mapPass),a.clear(),a.renderBufferDirect(A,null,U,h,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,a.setRenderTarget(C.map),a.clear(),a.renderBufferDirect(A,null,U,d,_,null)}function E(C,A,U,M){let S=null;const P=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)S=P;else if(S=U.isPointLight===!0?l:o,a.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const w=S.uuid,I=A.uuid;let L=c[w];L===void 0&&(L={},c[w]=L);let V=L[I];V===void 0&&(V=S.clone(),L[I]=V,A.addEventListener("dispose",R)),S=V}if(S.visible=A.visible,S.wireframe=A.wireframe,M===3?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const w=a.properties.get(S);w.light=U}return S}function x(C,A,U,M,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===3)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const I=e.update(C),L=C.material;if(Array.isArray(L)){const V=I.groups;for(let z=0,ne=V.length;z<ne;z++){const W=V[z],K=L[W.materialIndex];if(K&&K.visible){const Y=E(C,K,M,S);C.onBeforeShadow(a,C,A,U,I,Y,W),a.renderBufferDirect(U,null,I,Y,C,W),C.onAfterShadow(a,C,A,U,I,Y,W)}}}else if(L.visible){const V=E(C,L,M,S);C.onBeforeShadow(a,C,A,U,I,V,null),a.renderBufferDirect(U,null,I,V,C,null),C.onAfterShadow(a,C,A,U,I,V,null)}}const w=C.children;for(let I=0,L=w.length;I<L;I++)x(w[I],A,U,M,S)}function R(C){C.target.removeEventListener("dispose",R);for(const U in c){const M=c[U],S=C.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Fh={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Lh(a,e){function t(){let B=!1;const se=new ct;let ve=null;const Le=new ct(0,0,0,0);return{setMask:function(ue){ve!==ue&&!B&&(a.colorMask(ue,ue,ue,ue),ve=ue)},setLocked:function(ue){B=ue},setClear:function(ue,ie,we,Ie,Ne){Ne===!0&&(ue*=Ie,ie*=Ie,we*=Ie),se.set(ue,ie,we,Ie),Le.equals(se)===!1&&(a.clearColor(ue,ie,we,Ie),Le.copy(se))},reset:function(){B=!1,ve=null,Le.set(-1,0,0,0)}}}function r(){let B=!1,se=!1,ve=null,Le=null,ue=null;return{setReversed:function(ie){if(se!==ie){const we=e.get("EXT_clip_control");ie?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),se=ie;const Ie=ue;ue=null,this.setClear(Ie)}},getReversed:function(){return se},setTest:function(ie){ie?G(a.DEPTH_TEST):Z(a.DEPTH_TEST)},setMask:function(ie){ve!==ie&&!B&&(a.depthMask(ie),ve=ie)},setFunc:function(ie){if(se&&(ie=Fh[ie]),Le!==ie){switch(ie){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Le=ie}},setLocked:function(ie){B=ie},setClear:function(ie){ue!==ie&&(se&&(ie=1-ie),a.clearDepth(ie),ue=ie)},reset:function(){B=!1,ve=null,Le=null,ue=null,se=!1}}}function n(){let B=!1,se=null,ve=null,Le=null,ue=null,ie=null,we=null,Ie=null,Ne=null;return{setTest:function(He){B||(He?G(a.STENCIL_TEST):Z(a.STENCIL_TEST))},setMask:function(He){se!==He&&!B&&(a.stencilMask(He),se=He)},setFunc:function(He,st,rt){(ve!==He||Le!==st||ue!==rt)&&(a.stencilFunc(He,st,rt),ve=He,Le=st,ue=rt)},setOp:function(He,st,rt){(ie!==He||we!==st||Ie!==rt)&&(a.stencilOp(He,st,rt),ie=He,we=st,Ie=rt)},setLocked:function(He){B=He},setClear:function(He){Ne!==He&&(a.clearStencil(He),Ne=He)},reset:function(){B=!1,se=null,ve=null,Le=null,ue=null,ie=null,we=null,Ie=null,Ne=null}}}const i=new t,s=new r,o=new n,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,E=null,x=null,R=null,C=null,A=new Je(0,0,0),U=0,M=!1,S=null,P=null,w=null,I=null,L=null;const V=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=ne>=2);let K=null,Y={};const F=a.getParameter(a.SCISSOR_BOX),H=a.getParameter(a.VIEWPORT),Q=new ct().fromArray(F),ee=new ct().fromArray(H);function j(B,se,ve,Le){const ue=new Uint8Array(4),ie=a.createTexture();a.bindTexture(B,ie),a.texParameteri(B,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(B,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let we=0;we<ve;we++)B===a.TEXTURE_3D||B===a.TEXTURE_2D_ARRAY?a.texImage3D(se,0,a.RGBA,1,1,Le,0,a.RGBA,a.UNSIGNED_BYTE,ue):a.texImage2D(se+we,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ue);return ie}const k={};k[a.TEXTURE_2D]=j(a.TEXTURE_2D,a.TEXTURE_2D,1),k[a.TEXTURE_CUBE_MAP]=j(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[a.TEXTURE_2D_ARRAY]=j(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),k[a.TEXTURE_3D]=j(a.TEXTURE_3D,a.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),G(a.DEPTH_TEST),s.setFunc(3),Ee(!1),me(1),G(a.CULL_FACE),Fe(0);function G(B){u[B]!==!0&&(a.enable(B),u[B]=!0)}function Z(B){u[B]!==!1&&(a.disable(B),u[B]=!1)}function de(B,se){return f[B]!==se?(a.bindFramebuffer(B,se),f[B]=se,B===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=se),B===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=se),!0):!1}function pe(B,se){let ve=d,Le=!1;if(B){ve=h.get(se),ve===void 0&&(ve=[],h.set(se,ve));const ue=B.textures;if(ve.length!==ue.length||ve[0]!==a.COLOR_ATTACHMENT0){for(let ie=0,we=ue.length;ie<we;ie++)ve[ie]=a.COLOR_ATTACHMENT0+ie;ve.length=ue.length,Le=!0}}else ve[0]!==a.BACK&&(ve[0]=a.BACK,Le=!0);Le&&a.drawBuffers(ve)}function he(B){return g!==B?(a.useProgram(B),g=B,!0):!1}const ge={100:a.FUNC_ADD,101:a.FUNC_SUBTRACT,102:a.FUNC_REVERSE_SUBTRACT};ge[103]=a.MIN,ge[104]=a.MAX;const D={200:a.ZERO,201:a.ONE,202:a.SRC_COLOR,204:a.SRC_ALPHA,210:a.SRC_ALPHA_SATURATE,208:a.DST_COLOR,206:a.DST_ALPHA,203:a.ONE_MINUS_SRC_COLOR,205:a.ONE_MINUS_SRC_ALPHA,209:a.ONE_MINUS_DST_COLOR,207:a.ONE_MINUS_DST_ALPHA,211:a.CONSTANT_COLOR,212:a.ONE_MINUS_CONSTANT_COLOR,213:a.CONSTANT_ALPHA,214:a.ONE_MINUS_CONSTANT_ALPHA};function Fe(B,se,ve,Le,ue,ie,we,Ie,Ne,He){if(B===0){_===!0&&(Z(a.BLEND),_=!1);return}if(_===!1&&(G(a.BLEND),_=!0),B!==5){if(B!==m||He!==M){if((p!==100||x!==100)&&(a.blendEquation(a.FUNC_ADD),p=100,x=100),He)switch(B){case 1:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.ONE,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case 1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,E=null,R=null,C=null,A.set(0,0,0),U=0,m=B,M=He}return}ue=ue||se,ie=ie||ve,we=we||Le,(se!==p||ue!==x)&&(a.blendEquationSeparate(ge[se],ge[ue]),p=se,x=ue),(ve!==y||Le!==E||ie!==R||we!==C)&&(a.blendFuncSeparate(D[ve],D[Le],D[ie],D[we]),y=ve,E=Le,R=ie,C=we),(Ie.equals(A)===!1||Ne!==U)&&(a.blendColor(Ie.r,Ie.g,Ie.b,Ne),A.copy(Ie),U=Ne),m=B,M=!1}function Me(B,se){B.side===2?Z(a.CULL_FACE):G(a.CULL_FACE);let ve=B.side===1;se&&(ve=!ve),Ee(ve),B.blending===1&&B.transparent===!1?Fe(0):Fe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),i.setMask(B.colorWrite);const Le=B.stencilWrite;o.setTest(Le),Le&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?G(a.SAMPLE_ALPHA_TO_COVERAGE):Z(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(B){S!==B&&(B?a.frontFace(a.CW):a.frontFace(a.CCW),S=B)}function me(B){B!==0?(G(a.CULL_FACE),B!==P&&(B===1?a.cullFace(a.BACK):B===2?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Z(a.CULL_FACE),P=B}function xe(B){B!==w&&(z&&a.lineWidth(B),w=B)}function fe(B,se,ve){B?(G(a.POLYGON_OFFSET_FILL),(I!==se||L!==ve)&&(a.polygonOffset(se,ve),I=se,L=ve)):Z(a.POLYGON_OFFSET_FILL)}function ye(B){B?G(a.SCISSOR_TEST):Z(a.SCISSOR_TEST)}function ce(B){B===void 0&&(B=a.TEXTURE0+V-1),K!==B&&(a.activeTexture(B),K=B)}function Ge(B,se,ve){ve===void 0&&(K===null?ve=a.TEXTURE0+V-1:ve=K);let Le=Y[ve];Le===void 0&&(Le={type:void 0,texture:void 0},Y[ve]=Le),(Le.type!==B||Le.texture!==se)&&(K!==ve&&(a.activeTexture(ve),K=ve),a.bindTexture(B,se||k[B]),Le.type=B,Le.texture=se)}function b(){const B=Y[K];B!==void 0&&B.type!==void 0&&(a.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function v(){try{a.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function O(){try{a.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{a.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{a.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{a.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{a.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{a.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{a.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{a.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{a.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(B){Q.equals(B)===!1&&(a.scissor(B.x,B.y,B.z,B.w),Q.copy(B))}function Te(B){ee.equals(B)===!1&&(a.viewport(B.x,B.y,B.z,B.w),ee.copy(B))}function Ue(B,se){let ve=c.get(se);ve===void 0&&(ve=new WeakMap,c.set(se,ve));let Le=ve.get(B);Le===void 0&&(Le=a.getUniformBlockIndex(se,B.name),ve.set(B,Le))}function be(B,se){const Le=c.get(se).get(B);l.get(se)!==Le&&(a.uniformBlockBinding(se,Le,B.__bindingPointIndex),l.set(se,Le))}function Ve(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},K=null,Y={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,E=null,x=null,R=null,C=null,A=new Je(0,0,0),U=0,M=!1,S=null,P=null,w=null,I=null,L=null,Q.set(0,0,a.canvas.width,a.canvas.height),ee.set(0,0,a.canvas.width,a.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:G,disable:Z,bindFramebuffer:de,drawBuffers:pe,useProgram:he,setBlending:Fe,setMaterial:Me,setFlipSided:Ee,setCullFace:me,setLineWidth:xe,setPolygonOffset:fe,setScissorTest:ye,activeTexture:ce,bindTexture:Ge,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Ce,texImage3D:oe,updateUBOMapping:Ue,uniformBlockBinding:be,texStorage2D:le,texStorage3D:Re,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Se,scissor:_e,viewport:Te,reset:Ve}}function Ih(a,e,t,r,n,i,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return d?new OffscreenCanvas(b,v):Sr("canvas")}function _(b,v,O){let $=1;const J=Ge(b);if((J.width>O||J.height>O)&&($=O/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor($*J.width),Se=Math.floor($*J.height);f===void 0&&(f=g(X,Se));const le=v?g(X,Se):f;return le.width=X,le.height=Se,le.getContext("2d").drawImage(b,0,0,X,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Se+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){a.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?a.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function E(b,v,O,$,J=!1){if(b!==null){if(a[b]!==void 0)return a[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=v;if(v===a.RED&&(O===a.FLOAT&&(X=a.R32F),O===a.HALF_FLOAT&&(X=a.R16F),O===a.UNSIGNED_BYTE&&(X=a.R8)),v===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(X=a.R8UI),O===a.UNSIGNED_SHORT&&(X=a.R16UI),O===a.UNSIGNED_INT&&(X=a.R32UI),O===a.BYTE&&(X=a.R8I),O===a.SHORT&&(X=a.R16I),O===a.INT&&(X=a.R32I)),v===a.RG&&(O===a.FLOAT&&(X=a.RG32F),O===a.HALF_FLOAT&&(X=a.RG16F),O===a.UNSIGNED_BYTE&&(X=a.RG8)),v===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(X=a.RG8UI),O===a.UNSIGNED_SHORT&&(X=a.RG16UI),O===a.UNSIGNED_INT&&(X=a.RG32UI),O===a.BYTE&&(X=a.RG8I),O===a.SHORT&&(X=a.RG16I),O===a.INT&&(X=a.RG32I)),v===a.RGB_INTEGER&&(O===a.UNSIGNED_BYTE&&(X=a.RGB8UI),O===a.UNSIGNED_SHORT&&(X=a.RGB16UI),O===a.UNSIGNED_INT&&(X=a.RGB32UI),O===a.BYTE&&(X=a.RGB8I),O===a.SHORT&&(X=a.RGB16I),O===a.INT&&(X=a.RGB32I)),v===a.RGBA_INTEGER&&(O===a.UNSIGNED_BYTE&&(X=a.RGBA8UI),O===a.UNSIGNED_SHORT&&(X=a.RGBA16UI),O===a.UNSIGNED_INT&&(X=a.RGBA32UI),O===a.BYTE&&(X=a.RGBA8I),O===a.SHORT&&(X=a.RGBA16I),O===a.INT&&(X=a.RGBA32I)),v===a.RGB&&(O===a.UNSIGNED_INT_5_9_9_9_REV&&(X=a.RGB9_E5),O===a.UNSIGNED_INT_10F_11F_11F_REV&&(X=a.R11F_G11F_B10F)),v===a.RGBA){const Se=J?xr:$e.getTransfer($);O===a.FLOAT&&(X=a.RGBA32F),O===a.HALF_FLOAT&&(X=a.RGBA16F),O===a.UNSIGNED_BYTE&&(X=Se===it?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT_4_4_4_4&&(X=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(X=a.RGB5_A1)}return(X===a.R16F||X===a.R32F||X===a.RG16F||X===a.RG32F||X===a.RGBA16F||X===a.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(b,v){let O;return b?v===null||v===1014||v===1020?O=a.DEPTH24_STENCIL8:v===1015?O=a.DEPTH32F_STENCIL8:v===1012&&(O=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===1014||v===1020?O=a.DEPTH_COMPONENT24:v===1015?O=a.DEPTH_COMPONENT32F:v===1012&&(O=a.DEPTH_COMPONENT16),O}function R(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==1003&&b.minFilter!==1006?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function C(b){const v=b.target;v.removeEventListener("dispose",C),U(v),v.isVideoTexture&&u.delete(v)}function A(b){const v=b.target;v.removeEventListener("dispose",A),S(v)}function U(b){const v=r.get(b);if(v.__webglInit===void 0)return;const O=b.source,$=h.get(O);if($){const J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(b),Object.keys($).length===0&&h.delete(O)}r.remove(b)}function M(b){const v=r.get(b);a.deleteTexture(v.__webglTexture);const O=b.source,$=h.get(O);delete $[v.__cacheKey],s.memory.textures--}function S(b){const v=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)a.deleteFramebuffer(v.__webglFramebuffer[$][J]);else a.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&a.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)a.deleteFramebuffer(v.__webglFramebuffer[$]);else a.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&a.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&a.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&a.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&a.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=b.textures;for(let $=0,J=O.length;$<J;$++){const X=r.get(O[$]);X.__webglTexture&&(a.deleteTexture(X.__webglTexture),s.memory.textures--),r.remove(O[$])}r.remove(b)}let P=0;function w(){P=0}function I(){const b=P;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),P+=1,b}function L(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function V(b,v){const O=r.get(b);if(b.isVideoTexture&&ye(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(O,b,v);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+v)}function z(b,v){const O=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){k(O,b,v);return}t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+v)}function ne(b,v){const O=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){k(O,b,v);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+v)}function W(b,v){const O=r.get(b);if(b.version>0&&O.__version!==b.version){G(O,b,v);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+v)}const K={1e3:a.REPEAT,1001:a.CLAMP_TO_EDGE,1002:a.MIRRORED_REPEAT},Y={1003:a.NEAREST,1004:a.NEAREST_MIPMAP_NEAREST,1005:a.NEAREST_MIPMAP_LINEAR,1006:a.LINEAR,1007:a.LINEAR_MIPMAP_NEAREST,1008:a.LINEAR_MIPMAP_LINEAR},F={512:a.NEVER,519:a.ALWAYS,513:a.LESS,515:a.LEQUAL,514:a.EQUAL,518:a.GEQUAL,516:a.GREATER,517:a.NOTEQUAL};function H(b,v){if(v.type===1015&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===1006||v.magFilter===1007||v.magFilter===1005||v.magFilter===1008||v.minFilter===1006||v.minFilter===1007||v.minFilter===1005||v.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(b,a.TEXTURE_WRAP_S,K[v.wrapS]),a.texParameteri(b,a.TEXTURE_WRAP_T,K[v.wrapT]),(b===a.TEXTURE_3D||b===a.TEXTURE_2D_ARRAY)&&a.texParameteri(b,a.TEXTURE_WRAP_R,K[v.wrapR]),a.texParameteri(b,a.TEXTURE_MAG_FILTER,Y[v.magFilter]),a.texParameteri(b,a.TEXTURE_MIN_FILTER,Y[v.minFilter]),v.compareFunction&&(a.texParameteri(b,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(b,a.TEXTURE_COMPARE_FUNC,F[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===1003||v.minFilter!==1005&&v.minFilter!==1008||v.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");a.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function Q(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",C));const $=v.source;let J=h.get($);J===void 0&&(J={},h.set($,J));const X=L(v);if(X!==b.__cacheKey){J[X]===void 0&&(J[X]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,O=!0),J[X].usedTimes++;const Se=J[b.__cacheKey];Se!==void 0&&(J[b.__cacheKey].usedTimes--,Se.usedTimes===0&&M(v)),b.__cacheKey=X,b.__webglTexture=J[X].texture}return O}function ee(b,v,O){return Math.floor(Math.floor(b/O)/v)}function j(b,v,O,$){const X=b.updateRanges;if(X.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,v.width,v.height,O,$,v.data);else{X.sort((oe,_e)=>oe.start-_e.start);let Se=0;for(let oe=1;oe<X.length;oe++){const _e=X[Se],Te=X[oe],Ue=_e.start+_e.count,be=ee(Te.start,v.width,4),Ve=ee(_e.start,v.width,4);Te.start<=Ue+1&&be===Ve&&ee(Te.start+Te.count-1,v.width,4)===be?_e.count=Math.max(_e.count,Te.start+Te.count-_e.start):(++Se,X[Se]=Te)}X.length=Se+1;const le=a.getParameter(a.UNPACK_ROW_LENGTH),Re=a.getParameter(a.UNPACK_SKIP_PIXELS),Ce=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,v.width);for(let oe=0,_e=X.length;oe<_e;oe++){const Te=X[oe],Ue=Math.floor(Te.start/4),be=Math.ceil(Te.count/4),Ve=Ue%v.width,B=Math.floor(Ue/v.width),se=be,ve=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ve),a.pixelStorei(a.UNPACK_SKIP_ROWS,B),t.texSubImage2D(a.TEXTURE_2D,0,Ve,B,se,ve,O,$,v.data)}b.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,le),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Re),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ce)}}function k(b,v,O){let $=a.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=a.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=a.TEXTURE_3D);const J=Q(b,v),X=v.source;t.bindTexture($,b.__webglTexture,a.TEXTURE0+O);const Se=r.get(X);if(X.version!==Se.__version||J===!0){t.activeTexture(a.TEXTURE0+O);const le=$e.getPrimaries($e.workingColorSpace),Re=v.colorSpace===""?null:$e.getPrimaries(v.colorSpace),Ce=v.colorSpace===""||le===Re?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,v.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,v.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let oe=_(v.image,!1,n.maxTextureSize);oe=ce(v,oe);const _e=i.convert(v.format,v.colorSpace),Te=i.convert(v.type);let Ue=E(v.internalFormat,_e,Te,v.colorSpace,v.isVideoTexture);H($,v);let be;const Ve=v.mipmaps,B=v.isVideoTexture!==!0,se=Se.__version===void 0||J===!0,ve=X.dataReady,Le=R(v,oe);if(v.isDepthTexture)Ue=x(v.format===1027,v.type),se&&(B?t.texStorage2D(a.TEXTURE_2D,1,Ue,oe.width,oe.height):t.texImage2D(a.TEXTURE_2D,0,Ue,oe.width,oe.height,0,_e,Te,null));else if(v.isDataTexture)if(Ve.length>0){B&&se&&t.texStorage2D(a.TEXTURE_2D,Le,Ue,Ve[0].width,Ve[0].height);for(let ue=0,ie=Ve.length;ue<ie;ue++)be=Ve[ue],B?ve&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,be.width,be.height,_e,Te,be.data):t.texImage2D(a.TEXTURE_2D,ue,Ue,be.width,be.height,0,_e,Te,be.data);v.generateMipmaps=!1}else B?(se&&t.texStorage2D(a.TEXTURE_2D,Le,Ue,oe.width,oe.height),ve&&j(v,oe,_e,Te)):t.texImage2D(a.TEXTURE_2D,0,Ue,oe.width,oe.height,0,_e,Te,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){B&&se&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Ue,Ve[0].width,Ve[0].height,oe.depth);for(let ue=0,ie=Ve.length;ue<ie;ue++)if(be=Ve[ue],v.format!==1023)if(_e!==null)if(B){if(ve)if(v.layerUpdates.size>0){const we=ls(be.width,be.height,v.format,v.type);for(const Ie of v.layerUpdates){const Ne=be.data.subarray(Ie*we/be.data.BYTES_PER_ELEMENT,(Ie+1)*we/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,Ie,be.width,be.height,1,_e,Ne)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,oe.depth,_e,be.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ue,Ue,be.width,be.height,oe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ve&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,oe.depth,_e,Te,be.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ue,Ue,be.width,be.height,oe.depth,0,_e,Te,be.data)}else{B&&se&&t.texStorage2D(a.TEXTURE_2D,Le,Ue,Ve[0].width,Ve[0].height);for(let ue=0,ie=Ve.length;ue<ie;ue++)be=Ve[ue],v.format!==1023?_e!==null?B?ve&&t.compressedTexSubImage2D(a.TEXTURE_2D,ue,0,0,be.width,be.height,_e,be.data):t.compressedTexImage2D(a.TEXTURE_2D,ue,Ue,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ve&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,be.width,be.height,_e,Te,be.data):t.texImage2D(a.TEXTURE_2D,ue,Ue,be.width,be.height,0,_e,Te,be.data)}else if(v.isDataArrayTexture)if(B){if(se&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Ue,oe.width,oe.height,oe.depth),ve)if(v.layerUpdates.size>0){const ue=ls(oe.width,oe.height,v.format,v.type);for(const ie of v.layerUpdates){const we=oe.data.subarray(ie*ue/oe.data.BYTES_PER_ELEMENT,(ie+1)*ue/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ie,oe.width,oe.height,1,_e,Te,we)}v.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,_e,Te,oe.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ue,oe.width,oe.height,oe.depth,0,_e,Te,oe.data);else if(v.isData3DTexture)B?(se&&t.texStorage3D(a.TEXTURE_3D,Le,Ue,oe.width,oe.height,oe.depth),ve&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,_e,Te,oe.data)):t.texImage3D(a.TEXTURE_3D,0,Ue,oe.width,oe.height,oe.depth,0,_e,Te,oe.data);else if(v.isFramebufferTexture){if(se)if(B)t.texStorage2D(a.TEXTURE_2D,Le,Ue,oe.width,oe.height);else{let ue=oe.width,ie=oe.height;for(let we=0;we<Le;we++)t.texImage2D(a.TEXTURE_2D,we,Ue,ue,ie,0,_e,Te,null),ue>>=1,ie>>=1}}else if(Ve.length>0){if(B&&se){const ue=Ge(Ve[0]);t.texStorage2D(a.TEXTURE_2D,Le,Ue,ue.width,ue.height)}for(let ue=0,ie=Ve.length;ue<ie;ue++)be=Ve[ue],B?ve&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,_e,Te,be):t.texImage2D(a.TEXTURE_2D,ue,Ue,_e,Te,be);v.generateMipmaps=!1}else if(B){if(se){const ue=Ge(oe);t.texStorage2D(a.TEXTURE_2D,Le,Ue,ue.width,ue.height)}ve&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,_e,Te,oe)}else t.texImage2D(a.TEXTURE_2D,0,Ue,_e,Te,oe);m(v)&&p($),Se.__version=X.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function G(b,v,O){if(v.image.length!==6)return;const $=Q(b,v),J=v.source;t.bindTexture(a.TEXTURE_CUBE_MAP,b.__webglTexture,a.TEXTURE0+O);const X=r.get(J);if(J.version!==X.__version||$===!0){t.activeTexture(a.TEXTURE0+O);const Se=$e.getPrimaries($e.workingColorSpace),le=v.colorSpace===""?null:$e.getPrimaries(v.colorSpace),Re=v.colorSpace===""||Se===le?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,v.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,v.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,oe=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let ie=0;ie<6;ie++)!Ce&&!oe?_e[ie]=_(v.image[ie],!0,n.maxCubemapSize):_e[ie]=oe?v.image[ie].image:v.image[ie],_e[ie]=ce(v,_e[ie]);const Te=_e[0],Ue=i.convert(v.format,v.colorSpace),be=i.convert(v.type),Ve=E(v.internalFormat,Ue,be,v.colorSpace),B=v.isVideoTexture!==!0,se=X.__version===void 0||$===!0,ve=J.dataReady;let Le=R(v,Te);H(a.TEXTURE_CUBE_MAP,v);let ue;if(Ce){B&&se&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Le,Ve,Te.width,Te.height);for(let ie=0;ie<6;ie++){ue=_e[ie].mipmaps;for(let we=0;we<ue.length;we++){const Ie=ue[we];v.format!==1023?Ue!==null?B?ve&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Ve,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Ie.width,Ie.height,Ue,be,Ie.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Ve,Ie.width,Ie.height,0,Ue,be,Ie.data)}}}else{if(ue=v.mipmaps,B&&se){ue.length>0&&Le++;const ie=Ge(_e[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Le,Ve,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(oe){B?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,_e[ie].width,_e[ie].height,Ue,be,_e[ie].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,_e[ie].width,_e[ie].height,0,Ue,be,_e[ie].data);for(let we=0;we<ue.length;we++){const Ne=ue[we].image[ie].image;B?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Ne.width,Ne.height,Ue,be,Ne.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Ve,Ne.width,Ne.height,0,Ue,be,Ne.data)}}else{B?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ue,be,_e[ie]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,Ue,be,_e[ie]);for(let we=0;we<ue.length;we++){const Ie=ue[we];B?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Ue,be,Ie.image[ie]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Ve,Ue,be,Ie.image[ie])}}}m(v)&&p(a.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Z(b,v,O,$,J,X){const Se=i.convert(O.format,O.colorSpace),le=i.convert(O.type),Re=E(O.internalFormat,Se,le,O.colorSpace),Ce=r.get(v),oe=r.get(O);if(oe.__renderTarget=v,!Ce.__hasExternalTextures){const _e=Math.max(1,v.width>>X),Te=Math.max(1,v.height>>X);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?t.texImage3D(J,X,Re,_e,Te,v.depth,0,Se,le,null):t.texImage2D(J,X,Re,_e,Te,0,Se,le,null)}t.bindFramebuffer(a.FRAMEBUFFER,b),fe(v)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$,J,oe.__webglTexture,0,xe(v)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,$,J,oe.__webglTexture,X),t.bindFramebuffer(a.FRAMEBUFFER,null)}function de(b,v,O){if(a.bindRenderbuffer(a.RENDERBUFFER,b),v.depthBuffer){const $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,X=x(v.stencilBuffer,J),Se=v.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,le=xe(v);fe(v)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,le,X,v.width,v.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,le,X,v.width,v.height):a.renderbufferStorage(a.RENDERBUFFER,X,v.width,v.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Se,a.RENDERBUFFER,b)}else{const $=v.textures;for(let J=0;J<$.length;J++){const X=$[J],Se=i.convert(X.format,X.colorSpace),le=i.convert(X.type),Re=E(X.internalFormat,Se,le,X.colorSpace),Ce=xe(v);O&&fe(v)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ce,Re,v.width,v.height):fe(v)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ce,Re,v.width,v.height):a.renderbufferStorage(a.RENDERBUFFER,Re,v.width,v.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function pe(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=r.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const J=$.__webglTexture,X=xe(v);if(v.depthTexture.format===1026)fe(v)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,J,0,X):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,J,0);else if(v.depthTexture.format===1027)fe(v)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,J,0,X):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function he(b){const v=r.get(b),O=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const $=b.texture.mipmaps;$&&$.length>0?pe(v.__webglFramebuffer[0],b):pe(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(a.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=a.createRenderbuffer(),de(v.__webglDepthbuffer[$],b,!1);else{const J=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[$];a.bindRenderbuffer(a.RENDERBUFFER,X),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,X)}}else{const $=b.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(a.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=a.createRenderbuffer(),de(v.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,X),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,X)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function ge(b,v,O){const $=r.get(b);v!==void 0&&Z($.__webglFramebuffer,b,b.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&he(b)}function D(b){const v=b.texture,O=r.get(b),$=r.get(v);b.addEventListener("dispose",A);const J=b.textures,X=b.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=v.version,s.memory.textures++),X){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let Re=0;Re<v.mipmaps.length;Re++)O.__webglFramebuffer[le][Re]=a.createFramebuffer()}else O.__webglFramebuffer[le]=a.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)O.__webglFramebuffer[le]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(Se)for(let le=0,Re=J.length;le<Re;le++){const Ce=r.get(J[le]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=a.createTexture(),s.memory.textures++)}if(b.samples>0&&fe(b)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const Re=J[le];O.__webglColorRenderbuffer[le]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const Ce=i.convert(Re.format,Re.colorSpace),oe=i.convert(Re.type),_e=E(Re.internalFormat,Ce,oe,Re.colorSpace,b.isXRRenderTarget===!0),Te=xe(b);a.renderbufferStorageMultisample(a.RENDERBUFFER,Te,_e,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.RENDERBUFFER,O.__webglColorRenderbuffer[le])}a.bindRenderbuffer(a.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),de(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(X){t.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture),H(a.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)Z(O.__webglFramebuffer[le][Re],b,v,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re);else Z(O.__webglFramebuffer[le],b,v,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&p(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,Re=J.length;le<Re;le++){const Ce=J[le],oe=r.get(Ce);let _e=a.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(_e=b.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(_e,oe.__webglTexture),H(_e,Ce),Z(O.__webglFramebuffer,b,Ce,a.COLOR_ATTACHMENT0+le,_e,0),m(Ce)&&p(_e)}t.unbindTexture()}else{let le=a.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),H(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)Z(O.__webglFramebuffer[Re],b,v,a.COLOR_ATTACHMENT0,le,Re);else Z(O.__webglFramebuffer,b,v,a.COLOR_ATTACHMENT0,le,0);m(v)&&p(le),t.unbindTexture()}b.depthBuffer&&he(b)}function Fe(b){const v=b.textures;for(let O=0,$=v.length;O<$;O++){const J=v[O];if(m(J)){const X=y(b),Se=r.get(J).__webglTexture;t.bindTexture(X,Se),p(X),t.unbindTexture()}}}const Me=[],Ee=[];function me(b){if(b.samples>0){if(fe(b)===!1){const v=b.textures,O=b.width,$=b.height;let J=a.COLOR_BUFFER_BIT;const X=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Se=r.get(b),le=v.length>1;if(le)for(let Ce=0;Ce<v.length;Ce++)t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Re=b.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),le){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Se.__webglColorRenderbuffer[Ce]);const oe=r.get(v[Ce]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,oe,0)}a.blitFramebuffer(0,0,O,$,0,0,O,$,J,a.NEAREST),l===!0&&(Me.length=0,Ee.length=0,Me.push(a.COLOR_ATTACHMENT0+Ce),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Me.push(X),Ee.push(X),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Ee)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),le)for(let Ce=0;Ce<v.length;Ce++){t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,Se.__webglColorRenderbuffer[Ce]);const oe=r.get(v[Ce]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,oe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[v])}}}function xe(b){return Math.min(n.maxSamples,b.samples)}function fe(b){const v=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ye(b){const v=s.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function ce(b,v){const O=b.colorSpace,$=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==ii&&O!==""&&($e.getTransfer(O)===it?($!==1023||J!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=w,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=ne,this.setTextureCube=W,this.rebindTextures=ge,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=fe}function Nh(a,e){function t(r,n=""){let i;const s=$e.getTransfer(n);if(r===1009)return a.UNSIGNED_BYTE;if(r===1017)return a.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return a.UNSIGNED_SHORT_5_5_5_1;if(r===35902)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===35899)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===1010)return a.BYTE;if(r===1011)return a.SHORT;if(r===1012)return a.UNSIGNED_SHORT;if(r===1013)return a.INT;if(r===1014)return a.UNSIGNED_INT;if(r===1015)return a.FLOAT;if(r===1016)return a.HALF_FLOAT;if(r===1021)return a.ALPHA;if(r===1022)return a.RGB;if(r===1023)return a.RGBA;if(r===1026)return a.DEPTH_COMPONENT;if(r===1027)return a.DEPTH_STENCIL;if(r===1028)return a.RED;if(r===1029)return a.RED_INTEGER;if(r===1030)return a.RG;if(r===1031)return a.RG_INTEGER;if(r===1033)return a.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(s===it)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196||r===37492||r===37496)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===36196||r===37492)return s===it?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===37496)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===37808)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492||r===36494||r===36495)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===36492)return s===it?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===1020?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:t}}const Oh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new En({vertexShader:Oh,fragmentShader:Bh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new Nn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kh extends ai{constructor(e,t){super();const r=this;let n=null,i=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Gh,p={},y=t.getContextAttributes();let E=null,x=null;const R=[],C=[],A=new et;let U=null;const M=new Jt;M.viewport=new ct;const S=new Jt;S.viewport=new ct;const P=[M,S],w=new sl;let I=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let G=R[k];return G===void 0&&(G=new ra,R[k]=G),G.getTargetRaySpace()},this.getControllerGrip=function(k){let G=R[k];return G===void 0&&(G=new ra,R[k]=G),G.getGripSpace()},this.getHand=function(k){let G=R[k];return G===void 0&&(G=new ra,R[k]=G),G.getHandSpace()};function V(k){const G=C.indexOf(k.inputSource);if(G===-1)return;const Z=R[G];Z!==void 0&&(Z.update(k.inputSource,k.frame,c||s),Z.dispatchEvent({type:k.type,data:k.inputSource}))}function z(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",ne);for(let k=0;k<R.length;k++){const G=C[k];G!==null&&(C[k]=null,R[k].disconnect(G))}I=null,L=null,m.reset();for(const k in p)delete p[k];e.setRenderTarget(E),d=null,h=null,f=null,n=null,x=null,j.stop(),r.isPresenting=!1,e.setPixelRatio(U),e.setSize(A.width,A.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){i=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(n,t)),f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(k){if(n=k,n!==null){if(E=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",z),n.addEventListener("inputsourceschange",ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,de=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=y.stencil?1027:1026,de=y.stencil?1020:1014);const he={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:i};f=this.getBinding(),h=f.createProjectionLayer(he),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Ln(h.textureWidth,h.textureHeight,{format:1023,type:1009,depthTexture:new ro(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Z={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,Z),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ln(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),j.setContext(n),j.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(k){for(let G=0;G<k.removed.length;G++){const Z=k.removed[G],de=C.indexOf(Z);de>=0&&(C[de]=null,R[de].disconnect(Z))}for(let G=0;G<k.added.length;G++){const Z=k.added[G];let de=C.indexOf(Z);if(de===-1){for(let he=0;he<R.length;he++)if(he>=C.length){C.push(Z),de=he;break}else if(C[he]===null){C[he]=Z,de=he;break}if(de===-1)break}const pe=R[de];pe&&pe.connect(Z)}}const W=new te,K=new te;function Y(k,G,Z){W.setFromMatrixPosition(G.matrixWorld),K.setFromMatrixPosition(Z.matrixWorld);const de=W.distanceTo(K),pe=G.projectionMatrix.elements,he=Z.projectionMatrix.elements,ge=pe[14]/(pe[10]-1),D=pe[14]/(pe[10]+1),Fe=(pe[9]+1)/pe[5],Me=(pe[9]-1)/pe[5],Ee=(pe[8]-1)/pe[0],me=(he[8]+1)/he[0],xe=ge*Ee,fe=ge*me,ye=de/(-Ee+me),ce=ye*-Ee;if(G.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ce),k.translateZ(ye),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),pe[10]===-1)k.projectionMatrix.copy(G.projectionMatrix),k.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const Ge=ge+ye,b=D+ye,v=xe-ce,O=fe+(de-ce),$=Fe*D/b*Ge,J=Me*D/b*Ge;k.projectionMatrix.makePerspective(v,O,$,J,Ge,b),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function F(k,G){G===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(G.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(n===null)return;let G=k.near,Z=k.far;m.texture!==null&&(m.depthNear>0&&(G=m.depthNear),m.depthFar>0&&(Z=m.depthFar)),w.near=S.near=M.near=G,w.far=S.far=M.far=Z,(I!==w.near||L!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,L=w.far),w.layers.mask=k.layers.mask|6,M.layers.mask=w.layers.mask&3,S.layers.mask=w.layers.mask&5;const de=k.parent,pe=w.cameras;F(w,de);for(let he=0;he<pe.length;he++)F(pe[he],de);pe.length===2?Y(w,M,S):w.projectionMatrix.copy(M.projectionMatrix),H(k,w,de)};function H(k,G,Z){Z===null?k.matrix.copy(G.matrixWorld):(k.matrix.copy(Z.matrixWorld),k.matrix.invert(),k.matrix.multiply(G.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(G.projectionMatrix),k.projectionMatrixInverse.copy(G.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ga*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(w)},this.getCameraTexture=function(k){return p[k]};let Q=null;function ee(k,G){if(u=G.getViewerPose(c||s),g=G,u!==null){const Z=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let de=!1;Z.length!==w.cameras.length&&(w.cameras.length=0,de=!0);for(let D=0;D<Z.length;D++){const Fe=Z[D];let Me=null;if(d!==null)Me=d.getViewport(Fe);else{const me=f.getViewSubImage(h,Fe);Me=me.viewport,D===0&&(e.setRenderTargetTextures(x,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(x))}let Ee=P[D];Ee===void 0&&(Ee=new Jt,Ee.layers.enable(D),Ee.viewport=new ct,P[D]=Ee),Ee.matrix.fromArray(Fe.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Fe.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Me.x,Me.y,Me.width,Me.height),D===0&&(w.matrix.copy(Ee.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),de===!0&&w.cameras.push(Ee)}const pe=n.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){f=r.getBinding();const D=f.getDepthInformation(Z[0]);D&&D.isValid&&D.texture&&m.init(D,n.renderState)}if(pe&&pe.includes("camera-access")&&_){e.state.unbindTexture(),f=r.getBinding();for(let D=0;D<Z.length;D++){const Fe=Z[D].camera;if(Fe){let Me=p[Fe];Me||(Me=new ao,p[Fe]=Me);const Ee=f.getCameraImage(Fe);Me.sourceTexture=Ee}}}}for(let Z=0;Z<R.length;Z++){const de=C[Z],pe=R[Z];de!==null&&pe!==void 0&&pe.update(de,G,c||s)}Q&&Q(k,G),G.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:G}),g=null}const j=new lo;j.setAnimationLoop(ee),this.setAnimationLoop=function(k){Q=k},this.dispose=function(){}}}const Cn=new fn,zh=new ft;function Vh(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,$s(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),f(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),_(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),E=y.envMap,x=y.envMapRotation;E&&(m.envMap.value=E,Cn.copy(x),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),m.envMapRotation.value.setFromMatrix4(zh.makeRotationFromEuler(Cn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Hh(a,e,t,r){let n={},i={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const x=E.program;r.uniformBlockBinding(y,x)}function c(y,E){let x=n[y.id];x===void 0&&(g(y),x=u(y),n[y.id]=x,y.addEventListener("dispose",m));const R=E.program;r.updateUBOMapping(y,R);const C=e.render.frame;i[y.id]!==C&&(h(y),i[y.id]=C)}function u(y){const E=f();y.__bindingPointIndex=E;const x=a.createBuffer(),R=y.__size,C=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,x),a.bufferData(a.UNIFORM_BUFFER,R,C),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,E,x),x}function f(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const E=n[y.id],x=y.uniforms,R=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,E);for(let C=0,A=x.length;C<A;C++){const U=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,S=U.length;M<S;M++){const P=U[M];if(d(P,C,M,R)===!0){const w=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let V=0;V<I.length;V++){const z=I[V],ne=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,w+L,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,L),L+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,w,P.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(y,E,x,R){const C=y.value,A=E+"_"+x;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const U=R[A];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return R[A]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(y){const E=y.uniforms;let x=0;const R=16;for(let A=0,U=E.length;A<U;A++){const M=Array.isArray(E[A])?E[A]:[E[A]];for(let S=0,P=M.length;S<P;S++){const w=M[S],I=Array.isArray(w.value)?w.value:[w.value];for(let L=0,V=I.length;L<V;L++){const z=I[L],ne=_(z),W=x%R,K=W%ne.boundary,Y=W+K;x+=K,Y!==0&&R-Y<ne.storage&&(x+=R-Y),w.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=x,x+=ne.storage}}}const C=x%R;return C>0&&(x+=R-C),y.__size=x,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const x=s.indexOf(E.__bindingPointIndex);s.splice(x,1),a.deleteBuffer(n[E.id]),delete n[E.id],delete i[E.id]}function p(){for(const y in n)a.deleteBuffer(n[y]);s=[],n={},i={}}return{bind:l,update:c,dispose:p}}class Hd{constructor(e={}){const{canvas:t=Ro(),context:r=null,depth:n=!0,stencil:i=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=s;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Vt;let C=0,A=0,U=null,M=-1,S=null;const P=new ct,w=new ct;let I=null;const L=new Je(0);let V=0,z=t.width,ne=t.height,W=1,K=null,Y=null;const F=new ct(0,0,z,ne),H=new ct(0,0,z,ne);let Q=!1;const ee=new io;let j=!1,k=!1;const G=new ft,Z=new te,de=new ct,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function ge(){return U===null?W:1}let D=r;function Fe(T,q){return t.getContext(T,q)}try{const T={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r180"),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",ue,!1),D===null){const q="webgl2";if(D=Fe(q,T),D===null)throw Fe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Me,Ee,me,xe,fe,ye,ce,Ge,b,v,O,$,J,X,Se,le,Re,Ce,oe,_e,Te,Ue,be,Ve;function B(){Me=new $u(D),Me.init(),Ue=new Nh(D,Me),Ee=new qu(D,Me,e,Ue),me=new Lh(D,Me),Ee.reversedDepthBuffer&&h&&me.buffers.depth.setReversed(!0),xe=new nf(D),fe=new Mh,ye=new Ih(D,Me,me,fe,Ee,Ue,xe),ce=new Ku(x),Ge=new Qu(x),b=new ll(D),be=new Wu(D,b),v=new ef(D,b,xe,be),O=new af(D,v,b,xe),oe=new rf(D,Ee,ye),le=new Yu(fe),$=new Sh(x,ce,Ge,Me,Ee,be,le),J=new Vh(x,fe),X=new yh,Se=new wh(Me),Ce=new Hu(x,ce,Ge,me,O,d,l),Re=new Ph(x,O,Ee),Ve=new Hh(D,xe,Ee,me),_e=new Xu(D,Me,xe),Te=new tf(D,Me,xe),xe.programs=$.programs,x.capabilities=Ee,x.extensions=Me,x.properties=fe,x.renderLists=X,x.shadowMap=Re,x.state=me,x.info=xe}B();const se=new kh(x,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(z,ne,!1))},this.getSize=function(T){return T.set(z,ne)},this.setSize=function(T,q,re=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,ne=q,t.width=Math.floor(T*W),t.height=Math.floor(q*W),re===!0&&(t.style.width=T+"px",t.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(z*W,ne*W).floor()},this.setDrawingBufferSize=function(T,q,re){z=T,ne=q,W=re,t.width=Math.floor(T*re),t.height=Math.floor(q*re),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,q,re,ae){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,q,re,ae),me.viewport(P.copy(F).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(H)},this.setScissor=function(T,q,re,ae){T.isVector4?H.set(T.x,T.y,T.z,T.w):H.set(T,q,re,ae),me.scissor(w.copy(H).multiplyScalar(W).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(T){me.setScissorTest(Q=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,re=!0){let ae=0;if(T){let N=!1;if(U!==null){const Ae=U.texture.format;N=Ae===1033||Ae===1031||Ae===1029}if(N){const Ae=U.texture.type,Pe=Ae===1009||Ae===1014||Ae===1012||Ae===1020||Ae===1017||Ae===1018,Be=Ce.getClearColor(),Oe=Ce.getClearAlpha(),We=Be.r,Xe=Be.g,ke=Be.b;Pe?(g[0]=We,g[1]=Xe,g[2]=ke,g[3]=Oe,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=We,_[1]=Xe,_[2]=ke,_[3]=Oe,D.clearBufferiv(D.COLOR,0,_))}else ae|=D.COLOR_BUFFER_BIT}q&&(ae|=D.DEPTH_BUFFER_BIT),re&&(ae|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Ce.dispose(),X.dispose(),Se.dispose(),fe.dispose(),ce.dispose(),Ge.dispose(),O.dispose(),be.dispose(),Ve.dispose(),$.dispose(),se.dispose(),se.removeEventListener("sessionstart",rt),se.removeEventListener("sessionend",ut),mt.stop()};function ve(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=xe.autoReset,q=Re.enabled,re=Re.autoUpdate,ae=Re.needsUpdate,N=Re.type;B(),xe.autoReset=T,Re.enabled=q,Re.autoUpdate=re,Re.needsUpdate=ae,Re.type=N}function ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ie(T){const q=T.target;q.removeEventListener("dispose",ie),we(q)}function we(T){Ie(T),fe.remove(T)}function Ie(T){const q=fe.get(T).programs;q!==void 0&&(q.forEach(function(re){$.releaseProgram(re)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,re,ae,N,Ae){q===null&&(q=pe);const Pe=N.isMesh&&N.matrixWorld.determinant()<0,Be=fi(T,q,re,ae,N);me.setMaterial(ae,Pe);let Oe=re.index,We=1;if(ae.wireframe===!0){if(Oe=v.getWireframeAttribute(re),Oe===void 0)return;We=2}const Xe=re.drawRange,ke=re.attributes.position;let Ke=Xe.start*We,Qe=(Xe.start+Xe.count)*We;Ae!==null&&(Ke=Math.max(Ke,Ae.start*We),Qe=Math.min(Qe,(Ae.start+Ae.count)*We)),Oe!==null?(Ke=Math.max(Ke,0),Qe=Math.min(Qe,Oe.count)):ke!=null&&(Ke=Math.max(Ke,0),Qe=Math.min(Qe,ke.count));const ot=Qe-Ke;if(ot<0||ot===1/0)return;be.setup(N,ae,Be,re,Oe);let nt,tt=_e;if(Oe!==null&&(nt=b.get(Oe),tt=Te,tt.setIndex(nt)),N.isMesh)ae.wireframe===!0?(me.setLineWidth(ae.wireframeLinewidth*ge()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(N.isLine){let ze=ae.linewidth;ze===void 0&&(ze=1),me.setLineWidth(ze*ge()),N.isLineSegments?tt.setMode(D.LINES):N.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else N.isPoints?tt.setMode(D.POINTS):N.isSprite&&tt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Pi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ze=N._multiDrawStarts,at=N._multiDrawCounts,je=N._multiDrawCount,xt=Oe?b.get(Oe).bytesPerElement:1,tn=fe.get(ae).currentProgram.getUniforms();for(let St=0;St<je;St++)tn.setValue(D,"_gl_DrawID",St),tt.render(ze[St]/xt,at[St])}else if(N.isInstancedMesh)tt.renderInstances(Ke,ot,N.count);else if(re.isInstancedBufferGeometry){const ze=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,at=Math.min(re.instanceCount,ze);tt.renderInstances(Ke,ot,at)}else tt.render(Ke,ot)};function Ne(T,q,re){T.transparent===!0&&T.side===2&&T.forceSinglePass===!1?(T.side=1,T.needsUpdate=!0,dt(T,q,re),T.side=0,T.needsUpdate=!0,dt(T,q,re),T.side=2):dt(T,q,re)}this.compile=function(T,q,re=null){re===null&&(re=T),p=Se.get(re),p.init(q),E.push(p),re.traverseVisible(function(N){N.isLight&&N.layers.test(q.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==re&&T.traverseVisible(function(N){N.isLight&&N.layers.test(q.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const ae=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Ae=N.material;if(Ae)if(Array.isArray(Ae))for(let Pe=0;Pe<Ae.length;Pe++){const Be=Ae[Pe];Ne(Be,re,N),ae.add(Be)}else Ne(Ae,re,N),ae.add(Ae)}),p=E.pop(),ae},this.compileAsync=function(T,q,re=null){const ae=this.compile(T,q,re);return new Promise(N=>{function Ae(){if(ae.forEach(function(Pe){fe.get(Pe).currentProgram.isReady()&&ae.delete(Pe)}),ae.size===0){N(T);return}setTimeout(Ae,10)}Me.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let He=null;function st(T){He&&He(T)}function rt(){mt.stop()}function ut(){mt.start()}const mt=new lo;mt.setAnimationLoop(st),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(T){He=T,se.setAnimationLoop(T),T===null?mt.stop():mt.start()},se.addEventListener("sessionstart",rt),se.addEventListener("sessionend",ut),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(q),q=se.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,q,U),p=Se.get(T,E.length),p.init(q),E.push(p),G.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ee.setFromProjectionMatrix(G,2e3,q.reversedDepth),k=this.localClippingEnabled,j=le.init(this.clippingPlanes,k),m=X.get(T,y.length),m.init(),y.push(m),se.enabled===!0&&se.isPresenting===!0){const Ae=x.xr.getDepthSensingMesh();Ae!==null&&Nt(Ae,q,-1/0,x.sortObjects)}Nt(T,q,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(K,Y),he=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,he&&Ce.addToRenderList(m,T),this.info.render.frame++,j===!0&&le.beginShadows();const re=p.state.shadowsArray;Re.render(re,T,q),j===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=m.opaque,N=m.transmissive;if(p.setupLights(),q.isArrayCamera){const Ae=q.cameras;if(N.length>0)for(let Pe=0,Be=Ae.length;Pe<Be;Pe++){const Oe=Ae[Pe];Wt(ae,N,T,Oe)}he&&Ce.render(T);for(let Pe=0,Be=Ae.length;Pe<Be;Pe++){const Oe=Ae[Pe];Ot(m,T,Oe,Oe.viewport)}}else N.length>0&&Wt(ae,N,T,q),he&&Ce.render(T),Ot(m,T,q);U!==null&&A===0&&(ye.updateMultisampleRenderTarget(U),ye.updateRenderTargetMipmap(U)),T.isScene===!0&&T.onAfterRender(x,T,q),be.resetDefaultState(),M=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],j===!0&&le.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Nt(T,q,re,ae){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)re=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){ae&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);const Pe=O.update(T),Be=T.material;Be.visible&&m.push(T,Pe,Be,re,de.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){const Pe=O.update(T),Be=T.material;if(ae&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),de.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),de.copy(Pe.boundingSphere.center)),de.applyMatrix4(T.matrixWorld).applyMatrix4(G)),Array.isArray(Be)){const Oe=Pe.groups;for(let We=0,Xe=Oe.length;We<Xe;We++){const ke=Oe[We],Ke=Be[ke.materialIndex];Ke&&Ke.visible&&m.push(T,Pe,Ke,re,de.z,ke)}}else Be.visible&&m.push(T,Pe,Be,re,de.z,null)}}const Ae=T.children;for(let Pe=0,Be=Ae.length;Pe<Be;Pe++)Nt(Ae[Pe],q,re,ae)}function Ot(T,q,re,ae){const N=T.opaque,Ae=T.transmissive,Pe=T.transparent;p.setupLightsView(re),j===!0&&le.setGlobalState(x.clippingPlanes,re),ae&&me.viewport(P.copy(ae)),N.length>0&&Bt(N,q,re),Ae.length>0&&Bt(Ae,q,re),Pe.length>0&&Bt(Pe,q,re),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Wt(T,q,re,ae){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ae.id]===void 0&&(p.state.transmissionRenderTarget[ae.id]=new Ln(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const Ae=p.state.transmissionRenderTarget[ae.id],Pe=ae.viewport||P;Ae.setSize(Pe.z*x.transmissionResolutionScale,Pe.w*x.transmissionResolutionScale);const Be=x.getRenderTarget(),Oe=x.getActiveCubeFace(),We=x.getActiveMipmapLevel();x.setRenderTarget(Ae),x.getClearColor(L),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),he&&Ce.render(re);const Xe=x.toneMapping;x.toneMapping=0;const ke=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),p.setupLightsView(ae),j===!0&&le.setGlobalState(x.clippingPlanes,ae),Bt(T,re,ae),ye.updateMultisampleRenderTarget(Ae),ye.updateRenderTargetMipmap(Ae),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Qe=0,ot=q.length;Qe<ot;Qe++){const nt=q[Qe],tt=nt.object,ze=nt.geometry,at=nt.material,je=nt.group;if(at.side===2&&tt.layers.test(ae.layers)){const xt=at.side;at.side=1,at.needsUpdate=!0,Gt(tt,re,ae,ze,at,je),at.side=xt,at.needsUpdate=!0,Ke=!0}}Ke===!0&&(ye.updateMultisampleRenderTarget(Ae),ye.updateRenderTargetMipmap(Ae))}x.setRenderTarget(Be,Oe,We),x.setClearColor(L,V),ke!==void 0&&(ae.viewport=ke),x.toneMapping=Xe}function Bt(T,q,re){const ae=q.isScene===!0?q.overrideMaterial:null;for(let N=0,Ae=T.length;N<Ae;N++){const Pe=T[N],Be=Pe.object,Oe=Pe.geometry,We=Pe.group;let Xe=Pe.material;Xe.allowOverride===!0&&ae!==null&&(Xe=ae),Be.layers.test(re.layers)&&Gt(Be,q,re,Oe,Xe,We)}}function Gt(T,q,re,ae,N,Ae){T.onBeforeRender(x,q,re,ae,N,Ae),T.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(x,q,re,ae,T,Ae),N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=1,N.needsUpdate=!0,x.renderBufferDirect(re,q,ae,N,T,Ae),N.side=0,N.needsUpdate=!0,x.renderBufferDirect(re,q,ae,N,T,Ae),N.side=2):x.renderBufferDirect(re,q,ae,N,T,Ae),T.onAfterRender(x,q,re,ae,N,Ae)}function dt(T,q,re){q.isScene!==!0&&(q=pe);const ae=fe.get(T),N=p.state.lights,Ae=p.state.shadowsArray,Pe=N.state.version,Be=$.getParameters(T,N.state,Ae,q,re),Oe=$.getProgramCacheKey(Be);let We=ae.programs;ae.environment=T.isMeshStandardMaterial?q.environment:null,ae.fog=q.fog,ae.envMap=(T.isMeshStandardMaterial?Ge:ce).get(T.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,We===void 0&&(T.addEventListener("dispose",ie),We=new Map,ae.programs=We);let Xe=We.get(Oe);if(Xe!==void 0){if(ae.currentProgram===Xe&&ae.lightsStateVersion===Pe)return ui(T,Be),Xe}else Be.uniforms=$.getUniforms(T),T.onBeforeCompile(Be,x),Xe=$.acquireProgram(Be,Oe),We.set(Oe,Xe),ae.uniforms=Be.uniforms;const ke=ae.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=le.uniform),ui(T,Be),ae.needsLights=Ni(T),ae.lightsStateVersion=Pe,ae.needsLights&&(ke.ambientLightColor.value=N.state.ambient,ke.lightProbe.value=N.state.probe,ke.directionalLights.value=N.state.directional,ke.directionalLightShadows.value=N.state.directionalShadow,ke.spotLights.value=N.state.spot,ke.spotLightShadows.value=N.state.spotShadow,ke.rectAreaLights.value=N.state.rectArea,ke.ltc_1.value=N.state.rectAreaLTC1,ke.ltc_2.value=N.state.rectAreaLTC2,ke.pointLights.value=N.state.point,ke.pointLightShadows.value=N.state.pointShadow,ke.hemisphereLights.value=N.state.hemi,ke.directionalShadowMap.value=N.state.directionalShadowMap,ke.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ke.spotShadowMap.value=N.state.spotShadowMap,ke.spotLightMatrix.value=N.state.spotLightMatrix,ke.spotLightMap.value=N.state.spotLightMap,ke.pointShadowMap.value=N.state.pointShadowMap,ke.pointShadowMatrix.value=N.state.pointShadowMatrix),ae.currentProgram=Xe,ae.uniformsList=null,Xe}function en(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=gr.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function ui(T,q){const re=fe.get(T);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function fi(T,q,re,ae,N){q.isScene!==!0&&(q=pe),ye.resetTextureUnits();const Ae=q.fog,Pe=ae.isMeshStandardMaterial?q.environment:null,Be=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ii,Oe=(ae.isMeshStandardMaterial?Ge:ce).get(ae.envMap||Pe),We=ae.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Xe=!!re.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),ke=!!re.morphAttributes.position,Ke=!!re.morphAttributes.normal,Qe=!!re.morphAttributes.color;let ot=0;ae.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ot=x.toneMapping);const nt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,tt=nt!==void 0?nt.length:0,ze=fe.get(ae),at=p.state.lights;if(j===!0&&(k===!0||T!==S)){const ht=T===S&&ae.id===M;le.setState(ae,T,ht)}let je=!1;ae.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==at.state.version||ze.outputColorSpace!==Be||N.isBatchedMesh&&ze.batching===!1||!N.isBatchedMesh&&ze.batching===!0||N.isBatchedMesh&&ze.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ze.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ze.instancing===!1||!N.isInstancedMesh&&ze.instancing===!0||N.isSkinnedMesh&&ze.skinning===!1||!N.isSkinnedMesh&&ze.skinning===!0||N.isInstancedMesh&&ze.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ze.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ze.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ze.instancingMorph===!1&&N.morphTexture!==null||ze.envMap!==Oe||ae.fog===!0&&ze.fog!==Ae||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==le.numPlanes||ze.numIntersection!==le.numIntersection)||ze.vertexAlphas!==We||ze.vertexTangents!==Xe||ze.morphTargets!==ke||ze.morphNormals!==Ke||ze.morphColors!==Qe||ze.toneMapping!==ot||ze.morphTargetsCount!==tt)&&(je=!0):(je=!0,ze.__version=ae.version);let xt=ze.currentProgram;je===!0&&(xt=dt(ae,q,N));let tn=!1,St=!1,Xt=!1;const lt=xt.getUniforms(),Mt=ze.uniforms;if(me.useProgram(xt.program)&&(tn=!0,St=!0,Xt=!0),ae.id!==M&&(M=ae.id,St=!0),tn||S!==T){me.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),lt.setValue(D,"projectionMatrix",T.projectionMatrix),lt.setValue(D,"viewMatrix",T.matrixWorldInverse);const yt=lt.map.cameraPosition;yt!==void 0&&yt.setValue(D,Z.setFromMatrixPosition(T.matrixWorld)),Ee.logarithmicDepthBuffer&&lt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&lt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,St=!0,Xt=!0)}if(N.isSkinnedMesh){lt.setOptional(D,N,"bindMatrix"),lt.setOptional(D,N,"bindMatrixInverse");const ht=N.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),lt.setValue(D,"boneTexture",ht.boneTexture,ye))}N.isBatchedMesh&&(lt.setOptional(D,N,"batchingTexture"),lt.setValue(D,"batchingTexture",N._matricesTexture,ye),lt.setOptional(D,N,"batchingIdTexture"),lt.setValue(D,"batchingIdTexture",N._indirectTexture,ye),lt.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(D,"batchingColorTexture",N._colorsTexture,ye));const Et=re.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&oe.update(N,re,xt),(St||ze.receiveShadow!==N.receiveShadow)&&(ze.receiveShadow=N.receiveShadow,lt.setValue(D,"receiveShadow",N.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Mt.envMap.value=Oe,Mt.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&q.environment!==null&&(Mt.envMapIntensity.value=q.environmentIntensity),St&&(lt.setValue(D,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&br(Mt,Xt),Ae&&ae.fog===!0&&J.refreshFogUniforms(Mt,Ae),J.refreshMaterialUniforms(Mt,ae,W,ne,p.state.transmissionRenderTarget[T.id]),gr.upload(D,en(ze),Mt,ye)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(gr.upload(D,en(ze),Mt,ye),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&lt.setValue(D,"center",N.center),lt.setValue(D,"modelViewMatrix",N.modelViewMatrix),lt.setValue(D,"normalMatrix",N.normalMatrix),lt.setValue(D,"modelMatrix",N.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const ht=ae.uniformsGroups;for(let yt=0,hn=ht.length;yt<hn;yt++){const kt=ht[yt];Ve.update(kt,xt),Ve.bind(kt,xt)}}return xt}function br(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Ni(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,q,re){const ae=fe.get(T);ae.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),fe.get(T.texture).__webglTexture=q,fe.get(T.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:re,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const re=fe.get(T);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0};const On=D.createFramebuffer();this.setRenderTarget=function(T,q=0,re=0){U=T,C=q,A=re;let ae=!0,N=null,Ae=!1,Pe=!1;if(T){const Oe=fe.get(T);if(Oe.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(D.FRAMEBUFFER,null),ae=!1;else if(Oe.__webglFramebuffer===void 0)ye.setupRenderTarget(T);else if(Oe.__hasExternalTextures)ye.rebindTextures(T,fe.get(T.texture).__webglTexture,fe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ke=T.depthTexture;if(Oe.__boundDepthTexture!==ke){if(ke!==null&&fe.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(T)}}const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const Xe=fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?N=Xe[q][re]:N=Xe[q],Ae=!0):T.samples>0&&ye.useMultisampledRTT(T)===!1?N=fe.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?N=Xe[re]:N=Xe,P.copy(T.viewport),w.copy(T.scissor),I=T.scissorTest}else P.copy(F).multiplyScalar(W).floor(),w.copy(H).multiplyScalar(W).floor(),I=Q;if(re!==0&&(N=On),me.bindFramebuffer(D.FRAMEBUFFER,N)&&ae&&me.drawBuffers(T,N),me.viewport(P),me.scissor(w),me.setScissorTest(I),Ae){const Oe=fe.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,re)}else if(Pe){const Oe=q;for(let We=0;We<T.textures.length;We++){const Xe=fe.get(T.textures[We]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+We,Xe.__webglTexture,re,Oe)}}else if(T!==null&&re!==0){const Oe=fe.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Oe.__webglTexture,re)}M=-1},this.readRenderTargetPixels=function(T,q,re,ae,N,Ae,Pe,Be=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){me.bindFramebuffer(D.FRAMEBUFFER,Oe);try{const We=T.textures[Be],Xe=We.format,ke=We.type;if(!Ee.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-ae&&re>=0&&re<=T.height-N&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Be),D.readPixels(q,re,ae,N,Ue.convert(Xe),Ue.convert(ke),Ae))}finally{const We=U!==null?fe.get(U).__webglFramebuffer:null;me.bindFramebuffer(D.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(T,q,re,ae,N,Ae,Pe,Be=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe)if(q>=0&&q<=T.width-ae&&re>=0&&re<=T.height-N){me.bindFramebuffer(D.FRAMEBUFFER,Oe);const We=T.textures[Be],Xe=We.format,ke=We.type;if(!Ee.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.bufferData(D.PIXEL_PACK_BUFFER,Ae.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Be),D.readPixels(q,re,ae,N,Ue.convert(Xe),Ue.convert(ke),0);const Qe=U!==null?fe.get(U).__webglFramebuffer:null;me.bindFramebuffer(D.FRAMEBUFFER,Qe);const ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Co(D,ot,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ae),D.deleteBuffer(Ke),D.deleteSync(ot),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,re=0){const ae=Math.pow(2,-re),N=Math.floor(T.image.width*ae),Ae=Math.floor(T.image.height*ae),Pe=q!==null?q.x:0,Be=q!==null?q.y:0;ye.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,re,0,0,Pe,Be,N,Ae),me.unbindTexture()};const hi=D.createFramebuffer(),Ar=D.createFramebuffer();this.copyTextureToTexture=function(T,q,re=null,ae=null,N=0,Ae=null){Ae===null&&(N!==0?(Pi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=N,N=0):Ae=0);let Pe,Be,Oe,We,Xe,ke,Ke,Qe,ot;const nt=T.isCompressedTexture?T.mipmaps[Ae]:T.image;if(re!==null)Pe=re.max.x-re.min.x,Be=re.max.y-re.min.y,Oe=re.isBox3?re.max.z-re.min.z:1,We=re.min.x,Xe=re.min.y,ke=re.isBox3?re.min.z:0;else{const Et=Math.pow(2,-N);Pe=Math.floor(nt.width*Et),Be=Math.floor(nt.height*Et),T.isDataArrayTexture?Oe=nt.depth:T.isData3DTexture?Oe=Math.floor(nt.depth*Et):Oe=1,We=0,Xe=0,ke=0}ae!==null?(Ke=ae.x,Qe=ae.y,ot=ae.z):(Ke=0,Qe=0,ot=0);const tt=Ue.convert(q.format),ze=Ue.convert(q.type);let at;q.isData3DTexture?(ye.setTexture3D(q,0),at=D.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ye.setTexture2DArray(q,0),at=D.TEXTURE_2D_ARRAY):(ye.setTexture2D(q,0),at=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment);const je=D.getParameter(D.UNPACK_ROW_LENGTH),xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),tn=D.getParameter(D.UNPACK_SKIP_PIXELS),St=D.getParameter(D.UNPACK_SKIP_ROWS),Xt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,We),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke);const lt=T.isDataArrayTexture||T.isData3DTexture,Mt=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const Et=fe.get(T),ht=fe.get(q),yt=fe.get(Et.__renderTarget),hn=fe.get(ht.__renderTarget);me.bindFramebuffer(D.READ_FRAMEBUFFER,yt.__webglFramebuffer),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let kt=0;kt<Oe;kt++)lt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.get(T).__webglTexture,N,ke+kt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.get(q).__webglTexture,Ae,ot+kt)),D.blitFramebuffer(We,Xe,Pe,Be,Ke,Qe,Pe,Be,D.DEPTH_BUFFER_BIT,D.NEAREST);me.bindFramebuffer(D.READ_FRAMEBUFFER,null),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||T.isRenderTargetTexture||fe.has(T)){const Et=fe.get(T),ht=fe.get(q);me.bindFramebuffer(D.READ_FRAMEBUFFER,hi),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ar);for(let yt=0;yt<Oe;yt++)lt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,N,ke+yt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Et.__webglTexture,N),Mt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ht.__webglTexture,Ae,ot+yt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,Ae),N!==0?D.blitFramebuffer(We,Xe,Pe,Be,Ke,Qe,Pe,Be,D.COLOR_BUFFER_BIT,D.NEAREST):Mt?D.copyTexSubImage3D(at,Ae,Ke,Qe,ot+yt,We,Xe,Pe,Be):D.copyTexSubImage2D(at,Ae,Ke,Qe,We,Xe,Pe,Be);me.bindFramebuffer(D.READ_FRAMEBUFFER,null),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Mt?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(at,Ae,Ke,Qe,ot,Pe,Be,Oe,tt,ze,nt.data):q.isCompressedArrayTexture?D.compressedTexSubImage3D(at,Ae,Ke,Qe,ot,Pe,Be,Oe,tt,nt.data):D.texSubImage3D(at,Ae,Ke,Qe,ot,Pe,Be,Oe,tt,ze,nt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ae,Ke,Qe,Pe,Be,tt,ze,nt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ae,Ke,Qe,nt.width,nt.height,tt,nt.data):D.texSubImage2D(D.TEXTURE_2D,Ae,Ke,Qe,Pe,Be,tt,ze,nt);D.pixelStorei(D.UNPACK_ROW_LENGTH,je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,tn),D.pixelStorei(D.UNPACK_SKIP_ROWS,St),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt),Ae===0&&q.generateMipmaps&&D.generateMipmap(at),me.unbindTexture()},this.initRenderTarget=function(T){fe.get(T).__webglFramebuffer===void 0&&ye.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ye.setTextureCube(T,0):T.isData3DTexture?ye.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ye.setTexture2DArray(T,0):ye.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){C=0,A=0,U=null,me.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}function Wh(){var a=Object.create(null);function e(n,i){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=a[h.id].value),h}),c=r("<"+o+">.init",c),u&&(u=r("<"+o+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:f,getTransferables:u},i(f)}catch(h){h&&h.noLog||console.error(h),i(h)}}function t(n,i){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(f){return i(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){i(f)}function u(f){try{var h=a[o].getTransferables&&a[o].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),i(f,h)}catch(d){console.error(d),i(d)}}}function r(n,i){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var i=n.data,s=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function Xh(a){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,r=a.init;t=Array.isArray(t)?t.map(function(i){return i&&(i=i.onMainThread||i,i._getInitResult&&(i=i._getInitResult())),i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var po=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return po=function(){return a},a},qh=0,Yh=0,da=!1,Ui=Object.create(null),Di=Object.create(null),xa=Object.create(null);function ci(a){if((!a||typeof a.init!="function")&&!da)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,r=a.getTransferables,n=a.workerId,i=Xh(a);n==null&&(n="#default");var s="workerModule"+ ++qh,o=a.name||s,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(da=!0,u=ci({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+_r(u)+`
)}`}),da=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],f=arguments.length;f--;)u[f]=arguments[f];if(!po())return i.apply(void 0,u);if(!l){l=Fs(n,"registerModule",c.workerModuleData);var h=function(){l=null,Di[n].delete(h)};(Di[n]||(Di[n]=new Set)).add(h)}return l.then(function(d){var g=d.isCallable;if(g)return Fs(n,"callModule",{id:s,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:_r(t),getTransferables:r&&_r(r)},c.onMainThread=i,c}function Kh(a){Di[a]&&Di[a].forEach(function(e){e()}),Ui[a]&&(Ui[a].terminate(),delete Ui[a])}function _r(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function jh(a){var e=Ui[a];if(!e){var t=_r(Wh);e=Ui[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,s=xa[i];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete xa[i],s(n)}}return e}function Fs(a,e,t){return new Promise(function(r,n){var i=++Yh;xa[i]=function(s){s.success?r(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},jh(a).postMessage({messageId:i,action:e,data:t})})}function mo(){var a=(function(e){function t(K,Y,F,H,Q,ee,j,k){var G=1-j;k.x=G*G*K+2*G*j*F+j*j*Q,k.y=G*G*Y+2*G*j*H+j*j*ee}function r(K,Y,F,H,Q,ee,j,k,G,Z){var de=1-G;Z.x=de*de*de*K+3*de*de*G*F+3*de*G*G*Q+G*G*G*j,Z.y=de*de*de*Y+3*de*de*G*H+3*de*G*G*ee+G*G*G*k}function n(K,Y){for(var F=/([MLQCZ])([^MLQCZ]*)/g,H,Q,ee,j,k;H=F.exec(K);){var G=H[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(Z){return parseFloat(Z)});switch(H[1]){case"M":j=Q=G[0],k=ee=G[1];break;case"L":(G[0]!==j||G[1]!==k)&&Y("L",j,k,j=G[0],k=G[1]);break;case"Q":{Y("Q",j,k,j=G[2],k=G[3],G[0],G[1]);break}case"C":{Y("C",j,k,j=G[4],k=G[5],G[0],G[1],G[2],G[3]);break}case"Z":(j!==Q||k!==ee)&&Y("L",j,k,Q,ee);break}}}function i(K,Y,F){F===void 0&&(F=16);var H={x:0,y:0};n(K,function(Q,ee,j,k,G,Z,de,pe,he){switch(Q){case"L":Y(ee,j,k,G);break;case"Q":{for(var ge=ee,D=j,Fe=1;Fe<F;Fe++)t(ee,j,Z,de,k,G,Fe/(F-1),H),Y(ge,D,H.x,H.y),ge=H.x,D=H.y;break}case"C":{for(var Me=ee,Ee=j,me=1;me<F;me++)r(ee,j,Z,de,pe,he,k,G,me/(F-1),H),Y(Me,Ee,H.x,H.y),Me=H.x,Ee=H.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(K,Y){var F=K.getContext?K.getContext("webgl",c):K,H=l.get(F);if(!H){let de=function(Me){var Ee=ee[Me];if(!Ee&&(Ee=ee[Me]=F.getExtension(Me),!Ee))throw new Error(Me+" not supported");return Ee},pe=function(Me,Ee){var me=F.createShader(Ee);return F.shaderSource(me,Me),F.compileShader(me),me},he=function(Me,Ee,me,xe){if(!j[Me]){var fe={},ye={},ce=F.createProgram();F.attachShader(ce,pe(Ee,F.VERTEX_SHADER)),F.attachShader(ce,pe(me,F.FRAGMENT_SHADER)),F.linkProgram(ce),j[Me]={program:ce,transaction:function(b){F.useProgram(ce),b({setUniform:function(O,$){for(var J=[],X=arguments.length-2;X-- >0;)J[X]=arguments[X+2];var Se=ye[$]||(ye[$]=F.getUniformLocation(ce,$));F["uniform"+O].apply(F,[Se].concat(J))},setAttribute:function(O,$,J,X,Se){var le=fe[O];le||(le=fe[O]={buf:F.createBuffer(),loc:F.getAttribLocation(ce,O),data:null}),F.bindBuffer(F.ARRAY_BUFFER,le.buf),F.vertexAttribPointer(le.loc,$,F.FLOAT,!1,0,0),F.enableVertexAttribArray(le.loc),Q?F.vertexAttribDivisor(le.loc,X):de("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(le.loc,X),Se!==le.data&&(F.bufferData(F.ARRAY_BUFFER,Se,J),le.data=Se)}})}}}j[Me].transaction(xe)},ge=function(Me,Ee){G++;try{F.activeTexture(F.TEXTURE0+G);var me=k[Me];me||(me=k[Me]=F.createTexture(),F.bindTexture(F.TEXTURE_2D,me),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST)),F.bindTexture(F.TEXTURE_2D,me),Ee(me,G)}finally{G--}},D=function(Me,Ee,me){var xe=F.createFramebuffer();Z.push(xe),F.bindFramebuffer(F.FRAMEBUFFER,xe),F.activeTexture(F.TEXTURE0+Ee),F.bindTexture(F.TEXTURE_2D,Me),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Me,0);try{me(xe)}finally{F.deleteFramebuffer(xe),F.bindFramebuffer(F.FRAMEBUFFER,Z[--Z.length-1]||null)}},Fe=function(){ee={},j={},k={},G=-1,Z.length=0};var Q=typeof WebGL2RenderingContext<"u"&&F instanceof WebGL2RenderingContext,ee={},j={},k={},G=-1,Z=[];F.canvas.addEventListener("webglcontextlost",function(Me){Fe(),Me.preventDefault()},!1),l.set(F,H={gl:F,isWebGL2:Q,getExtension:de,withProgram:he,withTexture:ge,withTextureFramebuffer:D,handleContextLoss:Fe})}Y(H)}function f(K,Y,F,H,Q,ee,j,k){j===void 0&&(j=15),k===void 0&&(k=null),u(K,function(G){var Z=G.gl,de=G.withProgram,pe=G.withTexture;pe("copy",function(he,ge){Z.texImage2D(Z.TEXTURE_2D,0,Z.RGBA,Q,ee,0,Z.RGBA,Z.UNSIGNED_BYTE,Y),de("copy",s,o,function(D){var Fe=D.setUniform,Me=D.setAttribute;Me("aUV",2,Z.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Fe("1i","image",ge),Z.bindFramebuffer(Z.FRAMEBUFFER,k||null),Z.disable(Z.BLEND),Z.colorMask(j&8,j&4,j&2,j&1),Z.viewport(F,H,Q,ee),Z.scissor(F,H,Q,ee),Z.drawArrays(Z.TRIANGLES,0,3)})})})}function h(K,Y,F){var H=K.width,Q=K.height;u(K,function(ee){var j=ee.gl,k=new Uint8Array(H*Q*4);j.readPixels(0,0,H,Q,j.RGBA,j.UNSIGNED_BYTE,k),K.width=Y,K.height=F,f(j,k,0,0,H,Q)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(K,Y,F,H,Q,ee){ee===void 0&&(ee=1);var j=new Uint8Array(K*Y),k=H[2]-H[0],G=H[3]-H[1],Z=[];i(F,function(Me,Ee,me,xe){Z.push({x1:Me,y1:Ee,x2:me,y2:xe,minX:Math.min(Me,me),minY:Math.min(Ee,xe),maxX:Math.max(Me,me),maxY:Math.max(Ee,xe)})}),Z.sort(function(Me,Ee){return Me.maxX-Ee.maxX});for(var de=0;de<K;de++)for(var pe=0;pe<Y;pe++){var he=D(H[0]+k*(de+.5)/K,H[1]+G*(pe+.5)/Y),ge=Math.pow(1-Math.abs(he)/Q,ee)/2;he<0&&(ge=1-ge),ge=Math.max(0,Math.min(255,Math.round(ge*255))),j[pe*K+de]=ge}return j;function D(Me,Ee){for(var me=1/0,xe=1/0,fe=Z.length;fe--;){var ye=Z[fe];if(ye.maxX+xe<=Me)break;if(Me+xe>ye.minX&&Ee-xe<ye.maxY&&Ee+xe>ye.minY){var ce=p(Me,Ee,ye.x1,ye.y1,ye.x2,ye.y2);ce<me&&(me=ce,xe=Math.sqrt(me))}}return Fe(Me,Ee)&&(xe=-xe),xe}function Fe(Me,Ee){for(var me=0,xe=Z.length;xe--;){var fe=Z[xe];if(fe.maxX<=Me)break;var ye=fe.y1>Ee!=fe.y2>Ee&&Me<(fe.x2-fe.x1)*(Ee-fe.y1)/(fe.y2-fe.y1)+fe.x1;ye&&(me+=fe.y1<fe.y2?1:-1)}return me!==0}}function _(K,Y,F,H,Q,ee,j,k,G,Z){ee===void 0&&(ee=1),k===void 0&&(k=0),G===void 0&&(G=0),Z===void 0&&(Z=0),m(K,Y,F,H,Q,ee,j,null,k,G,Z)}function m(K,Y,F,H,Q,ee,j,k,G,Z,de){ee===void 0&&(ee=1),G===void 0&&(G=0),Z===void 0&&(Z=0),de===void 0&&(de=0);for(var pe=g(K,Y,F,H,Q,ee),he=new Uint8Array(pe.length*4),ge=0;ge<pe.length;ge++)he[ge*4+de]=pe[ge];f(j,he,G,Z,K,Y,1<<3-de,k)}function p(K,Y,F,H,Q,ee){var j=Q-F,k=ee-H,G=j*j+k*k,Z=G?Math.max(0,Math.min(1,((K-F)*j+(Y-H)*k)/G)):0,de=K-(F+Z*j),pe=Y-(H+Z*k);return de*de+pe*pe}var y=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:m}),E="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",R="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",C=new Float32Array([0,0,2,0,0,2]),A=null,U=!1,M={},S=new WeakMap;function P(K){if(!U&&!V(K))throw new Error("WebGL generation not supported")}function w(K,Y,F,H,Q,ee,j){if(ee===void 0&&(ee=1),j===void 0&&(j=null),!j&&(j=A,!j)){var k=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!k)throw new Error("OffscreenCanvas or DOM canvas not supported");j=A=k.getContext("webgl",{depth:!1})}P(j);var G=new Uint8Array(K*Y*4);u(j,function(he){var ge=he.gl,D=he.withTexture,Fe=he.withTextureFramebuffer;D("readable",function(Me,Ee){ge.texImage2D(ge.TEXTURE_2D,0,ge.RGBA,K,Y,0,ge.RGBA,ge.UNSIGNED_BYTE,null),Fe(Me,Ee,function(me){L(K,Y,F,H,Q,ee,ge,me,0,0,0),ge.readPixels(0,0,K,Y,ge.RGBA,ge.UNSIGNED_BYTE,G)})})});for(var Z=new Uint8Array(K*Y),de=0,pe=0;de<G.length;de+=4)Z[pe++]=G[de];return Z}function I(K,Y,F,H,Q,ee,j,k,G,Z){ee===void 0&&(ee=1),k===void 0&&(k=0),G===void 0&&(G=0),Z===void 0&&(Z=0),L(K,Y,F,H,Q,ee,j,null,k,G,Z)}function L(K,Y,F,H,Q,ee,j,k,G,Z,de){ee===void 0&&(ee=1),G===void 0&&(G=0),Z===void 0&&(Z=0),de===void 0&&(de=0),P(j);var pe=[];i(F,function(he,ge,D,Fe){pe.push(he,ge,D,Fe)}),pe=new Float32Array(pe),u(j,function(he){var ge=he.gl,D=he.isWebGL2,Fe=he.getExtension,Me=he.withProgram,Ee=he.withTexture,me=he.withTextureFramebuffer,xe=he.handleContextLoss;if(Ee("rawDistances",function(fe,ye){(K!==fe._lastWidth||Y!==fe._lastHeight)&&ge.texImage2D(ge.TEXTURE_2D,0,ge.RGBA,fe._lastWidth=K,fe._lastHeight=Y,0,ge.RGBA,ge.UNSIGNED_BYTE,null),Me("main",E,x,function(ce){var Ge=ce.setAttribute,b=ce.setUniform,v=!D&&Fe("ANGLE_instanced_arrays"),O=!D&&Fe("EXT_blend_minmax");Ge("aUV",2,ge.STATIC_DRAW,0,C),Ge("aLineSegment",4,ge.DYNAMIC_DRAW,1,pe),b.apply(void 0,["4f","uGlyphBounds"].concat(H)),b("1f","uMaxDistance",Q),b("1f","uExponent",ee),me(fe,ye,function($){ge.enable(ge.BLEND),ge.colorMask(!0,!0,!0,!0),ge.viewport(0,0,K,Y),ge.scissor(0,0,K,Y),ge.blendFunc(ge.ONE,ge.ONE),ge.blendEquationSeparate(ge.FUNC_ADD,D?ge.MAX:O.MAX_EXT),ge.clear(ge.COLOR_BUFFER_BIT),D?ge.drawArraysInstanced(ge.TRIANGLES,0,3,pe.length/4):v.drawArraysInstancedANGLE(ge.TRIANGLES,0,3,pe.length/4)})}),Me("post",s,R,function(ce){ce.setAttribute("aUV",2,ge.STATIC_DRAW,0,C),ce.setUniform("1i","tex",ye),ge.bindFramebuffer(ge.FRAMEBUFFER,k),ge.disable(ge.BLEND),ge.colorMask(de===0,de===1,de===2,de===3),ge.viewport(G,Z,K,Y),ge.scissor(G,Z,K,Y),ge.drawArrays(ge.TRIANGLES,0,3)})}),ge.isContextLost())throw xe(),new Error("webgl context lost")})}function V(K){var Y=!K||K===A?M:K.canvas||K,F=S.get(Y);if(F===void 0){U=!0;var H=null;try{var Q=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],ee=w(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,K);F=ee&&Q.length===ee.length&&ee.every(function(j,k){return j===Q[k]}),F||(H="bad trial run results",console.info(Q,ee))}catch(j){F=!1,H=j.message}H&&console.warn("WebGL SDF generation not supported:",H),U=!1,S.set(Y,F)}return F}var z=Object.freeze({__proto__:null,generate:w,generateIntoCanvas:I,generateIntoFramebuffer:L,isSupported:V});function ne(K,Y,F,H,Q,ee){Q===void 0&&(Q=Math.max(H[2]-H[0],H[3]-H[1])/2),ee===void 0&&(ee=1);try{return w.apply(z,arguments)}catch(j){return console.info("WebGL SDF generation failed, falling back to JS",j),g.apply(y,arguments)}}function W(K,Y,F,H,Q,ee,j,k,G,Z){Q===void 0&&(Q=Math.max(H[2]-H[0],H[3]-H[1])/2),ee===void 0&&(ee=1),k===void 0&&(k=0),G===void 0&&(G=0),Z===void 0&&(Z=0);try{return I.apply(z,arguments)}catch(de){return console.info("WebGL SDF generation failed, falling back to JS",de),_.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=ne,e.generateIntoCanvas=W,e.javascript=y,e.pathToLineSegments=i,e.webgl=z,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return a}function Zh(){var a=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(xe,fe){r[xe]=1<<fe+1,n[r[xe]]=xe}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,s=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,u=null;function f(){if(!u){u=new Map;var xe=function(ye){if(t.hasOwnProperty(ye)){var ce=0;t[ye].split(",").forEach(function(Ge){var b=Ge.split("+"),v=b[0],O=b[1];v=parseInt(v,36),O=O?parseInt(O,36):0,u.set(ce+=v,r[ye]);for(var $=0;$<O;$++)u.set(++ce,r[ye])})}};for(var fe in t)xe(fe)}}function h(xe){return f(),u.get(xe.codePointAt(0))||r.L}function d(xe){return n[h(xe)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(xe,fe){var ye=36,ce=0,Ge=new Map,b=fe&&new Map,v;return xe.split(",").forEach(function O($){if($.indexOf("+")!==-1)for(var J=+$;J--;)O(v);else{v=$;var X=$.split(">"),Se=X[0],le=X[1];Se=String.fromCodePoint(ce+=parseInt(Se,ye)),le=String.fromCodePoint(ce+=parseInt(le,ye)),Ge.set(Se,le),fe&&b.set(le,Se)}}),{map:Ge,reverseMap:b}}var m,p,y;function E(){if(!m){var xe=_(g.pairs,!0),fe=xe.map,ye=xe.reverseMap;m=fe,p=ye,y=_(g.canonical,!1).map}}function x(xe){return E(),m.get(xe)||null}function R(xe){return E(),p.get(xe)||null}function C(xe){return E(),y.get(xe)||null}var A=r.L,U=r.R,M=r.EN,S=r.ES,P=r.ET,w=r.AN,I=r.CS,L=r.B,V=r.S,z=r.ON,ne=r.BN,W=r.NSM,K=r.AL,Y=r.LRO,F=r.RLO,H=r.LRE,Q=r.RLE,ee=r.PDF,j=r.LRI,k=r.RLI,G=r.FSI,Z=r.PDI;function de(xe,fe){for(var ye=125,ce=new Uint32Array(xe.length),Ge=0;Ge<xe.length;Ge++)ce[Ge]=h(xe[Ge]);var b=new Map;function v(bt,Yt){var Dt=ce[bt];ce[bt]=Yt,b.set(Dt,b.get(Dt)-1),Dt&o&&b.set(o,b.get(o)-1),b.set(Yt,(b.get(Yt)||0)+1),Yt&o&&b.set(o,(b.get(o)||0)+1)}for(var O=new Uint8Array(xe.length),$=new Map,J=[],X=null,Se=0;Se<xe.length;Se++)X||J.push(X={start:Se,end:xe.length-1,level:fe==="rtl"?1:fe==="ltr"?0:Ba(Se,!1)}),ce[Se]&L&&(X.end=Se,X=null);for(var le=Q|H|F|Y|i|Z|ee|L,Re=function(bt){return bt+(bt&1?1:2)},Ce=function(bt){return bt+(bt&1?2:1)},oe=0;oe<J.length;oe++){X=J[oe];var _e=[{_level:X.level,_override:0,_isolate:0}],Te=void 0,Ue=0,be=0,Ve=0;b.clear();for(var B=X.start;B<=X.end;B++){var se=ce[B];if(Te=_e[_e.length-1],b.set(se,(b.get(se)||0)+1),se&o&&b.set(o,(b.get(o)||0)+1),se&le)if(se&(Q|H)){O[B]=Te._level;var ve=(se===Q?Ce:Re)(Te._level);ve<=ye&&!Ue&&!be?_e.push({_level:ve,_override:0,_isolate:0}):Ue||be++}else if(se&(F|Y)){O[B]=Te._level;var Le=(se===F?Ce:Re)(Te._level);Le<=ye&&!Ue&&!be?_e.push({_level:Le,_override:se&F?U:A,_isolate:0}):Ue||be++}else if(se&i){se&G&&(se=Ba(B+1,!0)===1?k:j),O[B]=Te._level,Te._override&&v(B,Te._override);var ue=(se===k?Ce:Re)(Te._level);ue<=ye&&Ue===0&&be===0?(Ve++,_e.push({_level:ue,_override:0,_isolate:1,_isolInitIndex:B})):Ue++}else if(se&Z){if(Ue>0)Ue--;else if(Ve>0){for(be=0;!_e[_e.length-1]._isolate;)_e.pop();var ie=_e[_e.length-1]._isolInitIndex;ie!=null&&($.set(ie,B),$.set(B,ie)),_e.pop(),Ve--}Te=_e[_e.length-1],O[B]=Te._level,Te._override&&v(B,Te._override)}else se&ee?(Ue===0&&(be>0?be--:!Te._isolate&&_e.length>1&&(_e.pop(),Te=_e[_e.length-1])),O[B]=Te._level):se&L&&(O[B]=X.level);else O[B]=Te._level,Te._override&&se!==ne&&v(B,Te._override)}for(var we=[],Ie=null,Ne=X.start;Ne<=X.end;Ne++){var He=ce[Ne];if(!(He&l)){var st=O[Ne],rt=He&i,ut=He===Z;Ie&&st===Ie._level?(Ie._end=Ne,Ie._endsWithIsolInit=rt):we.push(Ie={_start:Ne,_end:Ne,_level:st,_startsWithPDI:ut,_endsWithIsolInit:rt})}}for(var mt=[],Nt=0;Nt<we.length;Nt++){var Ot=we[Nt];if(!Ot._startsWithPDI||Ot._startsWithPDI&&!$.has(Ot._start)){for(var Wt=[Ie=Ot],Bt=void 0;Ie&&Ie._endsWithIsolInit&&(Bt=$.get(Ie._end))!=null;)for(var Gt=Nt+1;Gt<we.length;Gt++)if(we[Gt]._start===Bt){Wt.push(Ie=we[Gt]);break}for(var dt=[],en=0;en<Wt.length;en++)for(var ui=Wt[en],fi=ui._start;fi<=ui._end;fi++)dt.push(fi);for(var br=O[dt[0]],Ni=X.level,On=dt[0]-1;On>=0;On--)if(!(ce[On]&l)){Ni=O[On];break}var hi=dt[dt.length-1],Ar=O[hi],T=X.level;if(!(ce[hi]&i)){for(var q=hi+1;q<=X.end;q++)if(!(ce[q]&l)){T=O[q];break}}mt.push({_seqIndices:dt,_sosType:Math.max(Ni,br)%2?U:A,_eosType:Math.max(T,Ar)%2?U:A})}}for(var re=0;re<mt.length;re++){var ae=mt[re],N=ae._seqIndices,Ae=ae._sosType,Pe=ae._eosType;if(b.get(W))for(var Be=0;Be<N.length;Be++){var Oe=N[Be];if(ce[Oe]&W){for(var We=Ae,Xe=Be-1;Xe>=0;Xe--)if(!(ce[N[Xe]]&l)){We=ce[N[Xe]];break}v(Oe,We&(i|Z)?z:We)}}if(b.get(M))for(var ke=0;ke<N.length;ke++){var Ke=N[ke];if(ce[Ke]&M)for(var Qe=ke-1;Qe>=-1;Qe--){var ot=Qe===-1?Ae:ce[N[Qe]];if(ot&s){ot===K&&v(Ke,w);break}}}if(b.get(K))for(var nt=0;nt<N.length;nt++){var tt=N[nt];ce[tt]&K&&v(tt,U)}if(b.get(S)||b.get(I))for(var ze=1;ze<N.length-1;ze++){var at=N[ze];if(ce[at]&(S|I)){for(var je=0,xt=0,tn=ze-1;tn>=0&&(je=ce[N[tn]],!!(je&l));tn--);for(var St=ze+1;St<N.length&&(xt=ce[N[St]],!!(xt&l));St++);je===xt&&(ce[at]===S?je===M:je&(M|w))&&v(at,je)}}if(b.get(M))for(var Xt=0;Xt<N.length;Xt++){var lt=N[Xt];if(ce[lt]&M){for(var Mt=Xt-1;Mt>=0&&ce[N[Mt]]&(P|l);Mt--)v(N[Mt],M);for(var Et=Xt+1;Et<N.length&&ce[N[Et]]&(P|l);Et++)v(N[Et],M)}}if(b.get(P)||b.get(S)||b.get(I))for(var ht=0;ht<N.length;ht++){var yt=N[ht];if(ce[yt]&(P|S|I)){v(yt,z);for(var hn=ht-1;hn>=0&&ce[N[hn]]&l;hn--)v(N[hn],z);for(var kt=ht+1;kt<N.length&&ce[N[kt]]&l;kt++)v(N[kt],z)}}if(b.get(M))for(var Rr=0,Ca=Ae;Rr<N.length;Rr++){var wa=N[Rr],Cr=ce[wa];Cr&M?Ca===A&&v(wa,A):Cr&s&&(Ca=Cr)}if(b.get(o)){var di=U|M|w,Ua=di|A,Oi=[];{for(var Bn=[],Gn=0;Gn<N.length;Gn++)if(ce[N[Gn]]&o){var pi=xe[N[Gn]],Da=void 0;if(x(pi)!==null)if(Bn.length<63)Bn.push({char:pi,seqIndex:Gn});else break;else if((Da=R(pi))!==null)for(var mi=Bn.length-1;mi>=0;mi--){var wr=Bn[mi].char;if(wr===Da||wr===R(C(pi))||x(C(wr))===pi){Oi.push([Bn[mi].seqIndex,Gn]),Bn.length=mi;break}}}Oi.sort(function(bt,Yt){return bt[0]-Yt[0]})}for(var Ur=0;Ur<Oi.length;Ur++){for(var Pa=Oi[Ur],gi=Pa[0],Bi=Pa[1],Fa=!1,qt=0,Dr=gi+1;Dr<Bi;Dr++){var Pr=N[Dr];if(ce[Pr]&Ua){Fa=!0;var La=ce[Pr]&di?U:A;if(La===kn(Pr)){qt=La;break}}}if(Fa&&!qt){qt=Ae;for(var Fr=gi-1;Fr>=0;Fr--){var Gi=N[Fr];if(ce[Gi]&Ua){var Ia=ce[Gi]&di?U:A;Ia!==kn(Gi)?qt=Ia:qt=kn(Gi);break}}}if(qt){if(ce[N[gi]]=ce[N[Bi]]=qt,qt!==kn(N[gi])){for(var _i=gi+1;_i<N.length;_i++)if(!(ce[N[_i]]&l)){h(xe[N[_i]])&W&&(ce[N[_i]]=qt);break}}if(qt!==kn(N[Bi])){for(var vi=Bi+1;vi<N.length;vi++)if(!(ce[N[vi]]&l)){h(xe[N[vi]])&W&&(ce[N[vi]]=qt);break}}}}for(var dn=0;dn<N.length;dn++)if(ce[N[dn]]&o){for(var Na=dn,Lr=dn,Ir=Ae,xi=dn-1;xi>=0;xi--)if(ce[N[xi]]&l)Na=xi;else{Ir=ce[N[xi]]&di?U:A;break}for(var Oa=Pe,Si=dn+1;Si<N.length;Si++)if(ce[N[Si]]&(o|l))Lr=Si;else{Oa=ce[N[Si]]&di?U:A;break}for(var ki=Na;ki<=Lr;ki++)ce[N[ki]]=Ir===Oa?Ir:kn(N[ki]);dn=Lr}}}for(var Ft=X.start;Ft<=X.end;Ft++){var To=O[Ft],zi=ce[Ft];if(To&1?zi&(A|M|w)&&O[Ft]++:zi&U?O[Ft]++:zi&(w|M)&&(O[Ft]+=2),zi&l&&(O[Ft]=Ft===0?X.level:O[Ft-1]),Ft===X.end||h(xe[Ft])&(V|L))for(var Vi=Ft;Vi>=0&&h(xe[Vi])&c;Vi--)O[Vi]=X.level}}return{levels:O,paragraphs:J};function Ba(bt,Yt){for(var Dt=bt;Dt<xe.length;Dt++){var pn=ce[Dt];if(pn&(U|K))return 1;if(pn&(L|A)||Yt&&pn===Z)return 0;if(pn&i){var Ga=bo(Dt);Dt=Ga===-1?xe.length:Ga}}return 0}function bo(bt){for(var Yt=1,Dt=bt+1;Dt<xe.length;Dt++){var pn=ce[Dt];if(pn&L)break;if(pn&Z){if(--Yt===0)return Dt}else pn&i&&Yt++}return-1}function kn(bt){return O[bt]&1?U:A}}var pe="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",he;function ge(){if(!he){var xe=_(pe,!0),fe=xe.map,ye=xe.reverseMap;ye.forEach(function(ce,Ge){fe.set(Ge,ce)}),he=fe}}function D(xe){return ge(),he.get(xe)||null}function Fe(xe,fe,ye,ce){var Ge=xe.length;ye=Math.max(0,ye==null?0:+ye),ce=Math.min(Ge-1,ce==null?Ge-1:+ce);for(var b=new Map,v=ye;v<=ce;v++)if(fe[v]&1){var O=D(xe[v]);O!==null&&b.set(v,O)}return b}function Me(xe,fe,ye,ce){var Ge=xe.length;ye=Math.max(0,ye==null?0:+ye),ce=Math.min(Ge-1,ce==null?Ge-1:+ce);var b=[];return fe.paragraphs.forEach(function(v){var O=Math.max(ye,v.start),$=Math.min(ce,v.end);if(O<$){for(var J=fe.levels.slice(O,$+1),X=$;X>=O&&h(xe[X])&c;X--)J[X]=v.level;for(var Se=v.level,le=1/0,Re=0;Re<J.length;Re++){var Ce=J[Re];Ce>Se&&(Se=Ce),Ce<le&&(le=Ce|1)}for(var oe=Se;oe>=le;oe--)for(var _e=0;_e<J.length;_e++)if(J[_e]>=oe){for(var Te=_e;_e+1<J.length&&J[_e+1]>=oe;)_e++;_e>Te&&b.push([Te+ye,_e+ye])}}}),b}function Ee(xe,fe,ye,ce){var Ge=me(xe,fe,ye,ce),b=[].concat(xe);return Ge.forEach(function(v,O){b[O]=(fe.levels[v]&1?D(xe[v]):null)||xe[v]}),b.join("")}function me(xe,fe,ye,ce){for(var Ge=Me(xe,fe,ye,ce),b=[],v=0;v<xe.length;v++)b[v]=v;return Ge.forEach(function(O){for(var $=O[0],J=O[1],X=b.slice($,J+1),Se=X.length;Se--;)b[J-Se]=X[Se]}),b}return e.closingToOpeningBracket=R,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=C,e.getEmbeddingLevels=de,e.getMirroredCharacter=D,e.getMirroredCharactersMap=Fe,e.getReorderSegments=Me,e.getReorderedIndices=me,e.getReorderedString=Ee,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return a}const go=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Sa(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=Ye[n];return i?Sa(i):r}return a.replace(e,t)}const Tt=[];for(let a=0;a<256;a++)Tt[a]=(a<16?"0":"")+a.toString(16);function Jh(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tt[a&255]+Tt[a>>8&255]+Tt[a>>16&255]+Tt[a>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]).toUpperCase()}const wn=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])}return a},Qh=Date.now(),Ls=new WeakMap,Is=new Map;let $h=1e10;function Ma(a,e){const t=id(e);let r=Ls.get(a);if(r||Ls.set(a,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,u){a.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=Is[f];if(!h){const d=ed(this,c,e,t);h=Is[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,wn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Qh}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:$h++}),u.uuid=Jh(),u.uniforms=wn({},c.uniforms,e.uniforms),u.defines=wn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=wn({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},type:{get:()=>a.type,set:c=>{a.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(wn(this.extensions,c.extensions),wn(this.defines,c.defines),wn(this.uniforms,eo.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Ma(a.isDerivedMaterial?a.getDepthMaterial():new so({depthPacking:3201}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Ma(a.isDerivedMaterial?a.getDistanceMaterial():new oo,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return r[t]=s,new s}function ed(a,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:g}=r;if(i=i||"",s=s||"",o=o||"",c=c||"",u=u||"",f=f||"",(l||d)&&(e=Sa(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Sa(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(h){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(_.push(m),"")),f=`${h}
${_.join(`
`)}
${f}`}if(g){const _=`
uniform float ${g};
`;i=_+i,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,m,p,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,p))?m:`troika_${m}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Ns(e,n,i,s,o),t=Ns(t,n,c,u,f),{vertexShader:e,fragmentShader:t}}function Ns(a,e,t,r,n){return(r||n||t)&&(a=a.replace(go,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),a}function td(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let nd=0;const Os=new Map;function id(a){const e=JSON.stringify(a,td);let t=Os.get(e);return t==null&&Os.set(e,t=++nd),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function rd(){return typeof window>"u"&&(self.window=self),(function(a){var e={parse:function(n){var i=e._bin,s=new Uint8Array(n);if(i.readASCII(s,0,4)=="ttcf"){var o=4;i.readUshort(s,o),o+=2,i.readUshort(s,o),o+=2;var l=i.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var f=i.readUint(s,o);o+=4,c.push(e._readFont(s,f))}return c}return[e._readFont(s,0)]},_readFont:function(n,i){var s=e._bin,o=i;s.readFixed(n,i),i+=4;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},f={},h=0;h<l;h++){var d=s.readASCII(n,i,4);i+=4,s.readUint(n,i),i+=4;var g=s.readUint(n,i);i+=4;var _=s.readUint(n,i);i+=4,f[d]={offset:g,length:_}}for(h=0;h<c.length;h++){var m=c[h];f[m]&&(u[m.trim()]=e[m.trim()].parse(n,f[m].offset,f[m].length,u))}return u},_tabOffset:function(n,i,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,u=0;u<l;u++){var f=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var h=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,f==i)return h}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,s){for(var o="",l=0;l<s;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,s){var o=e._bin._tdec;return o&&i==0&&s==n.length?o.decode(n):e._bin.readASCII(n,i,s)},readBytes:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,s,o,l){var c=e._bin,u={},f=i;c.readFixed(n,i),i+=4;var h=c.readUshort(n,i);i+=2;var d=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,f+h),u.featureList=e._lctf.readFeatureList(n,f+d),u.lookupList=e._lctf.readLookupList(n,f+g,l),u},e._lctf.readLookupList=function(n,i,s){var o=e._bin,l=i,c=[],u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,l+h,s);c.push(d)}return c},e._lctf.readLookupTable=function(n,i,s){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var f=c.ltype,h=0;h<u;h++){var d=o.readUshort(n,i);i+=2;var g=s(n,f,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,s=0;s<32;s++)(n>>>s&1)!=0&&i++;return i},e._lctf.readClassDef=function(n,i){var s=e._bin,o=[],l=s.readUshort(n,i);if(i+=2,l==1){var c=s.readUshort(n,i);i+=2;var u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++)o.push(c+f),o.push(c+f),o.push(s.readUshort(n,i)),i+=2}if(l==2){var h=s.readUshort(n,i);for(i+=2,f=0;f<h;f++)o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=i&&i<=l)return s}return-1},e._lctf.readCoverage=function(n,i){var s=e._bin,o={};o.fmt=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=s.readUshorts(n,i,l)),o.fmt==2&&(o.tab=s.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var s=n.tab;if(n.fmt==1)return s.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(s,i);if(o!=-1)return s[o+2]+(i-s[o])}return-1},e._lctf.readFeatureList=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=s.readASCII(n,i,4);i+=4;var h=s.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+h);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(n,i);i+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(s.readUshort(n,i+2*f));return l},e._lctf.readScriptList=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=s.readASCII(n,i,4);i+=4;var h=s.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readScriptTable(n,o+h)}return l},e._lctf.readScriptTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=s.readASCII(n,i,4);i+=4;var d=s.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,i){var s=e._bin,o={};s.readUshort(n,i),i+=2,o.reqFeature=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.features=s.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,s){var o=e._bin;(n=new Uint8Array(n.buffer,i,s))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var f=[];i=e.CFF.readIndex(n,i,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(n,i+f[u],i+f[u+1]));i+=f[f.length-1];var d=h[0],g=[];i=e.CFF.readIndex(n,i,g);var _=[];for(u=0;u<g.length-1;u++)_.push(o.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var m=[];for(u=0;u<g.length-1;u++)m.push(o.readBytes(n,i+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){i=d.FDArray;var p=[];for(i=e.CFF.readIndex(n,i,p),d.FDArray=[],u=0;u<p.length-1;u++){var y=e.CFF.readDict(n,i+p[u],i+p[u+1]);e.CFF._readFDict(n,y,_),d.FDArray.push(y)}i+=p[p.length-1],i=d.FDSelect,d.FDSelect=[];var E=n[i];if(i++,E!=3)throw E;var x=o.readUshort(n,i);for(i+=2,u=0;u<x+1;u++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,i,s){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=s[i[l]-426+35])},e.CFF.readSubrs=function(n,i,s){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var f=0;f<l.length-1;f++)s.Subrs.push(o.readBytes(n,i+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==i)return s;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,s){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,s){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<s;u++){var f=o.readUshort(n,i);i+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){f=o.readUshort(n,i),i+=2;var h=0;for(c==1?(h=n[i],i++):(h=o.readUshort(n,i),i+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(n,i,s){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)s.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,s){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=o.readShort(n,i+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=o.readInt(n,i+1)/65535,u=5),s.val=h??"o"+f,s.size=u},e.CFF.readCharString=function(n,i,s){for(var o=i+s,l=e._bin,c=[];i<o;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,g=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(g=l.readShort(n,i+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=l.readInt(n,i+1)/65535,h=5),c.push(g??"o"+d),i+=h}return c},e.CFF.readDict=function(n,i,s){for(var o=e._bin,l={},c=[];i<s;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,g=null;if(u==28&&(g=o.readShort(n,i+1),h=3),u==29&&(g=o.readInt(n,i+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=o.readInt(n,i+1)/65535,h=5,"unknown number";if(u==30){var _=[];for(h=1;;){var m=n[i+h];h++;var p=m>>4,y=15&m;if(p!=15&&_.push(p),y!=15&&_.push(y),y==15)break}for(var E="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],R=0;R<_.length;R++)E+=x[_[R]];g=parseFloat(E)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),i+=h}return l},e.cmap={},e.cmap.parse=function(n,i,s){n=new Uint8Array(n.buffer,i,s),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var _="p"+h+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=l.tables.length,u.push(g);var y=o.readUshort(n,g);y==0?p=e.cmap.parse0(n,g):y==4?p=e.cmap.parse4(n,g):y==6?p=e.cmap.parse6(n,g):y==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+y,h,d,g),l.tables.push(p)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=m}return l},e.cmap.parse0=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var s=e._bin,o=i,l={};l.format=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2;var u=s.readUshort(n,i);i+=2;var f=u/2;l.searchRange=s.readUshort(n,i),i+=2,l.entrySelector=s.readUshort(n,i),i+=2,l.rangeShift=s.readUshort(n,i),i+=2,l.endCount=s.readUshorts(n,i,f),i+=2*f,i+=2,l.startCount=s.readUshorts(n,i,f),i+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(s.readShort(n,i)),i+=2;for(l.idRangeOffset=s.readUshorts(n,i,f),i+=2*f,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(s.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,o.firstCode=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,i+=2,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4;var l=s.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var u=i+12*c,f=s.readUint(n,u+0),h=s.readUint(n,u+4),d=s.readUint(n,u+8);o.groups.push([f,h,d])}return o},e.glyf={},e.glyf.parse=function(n,i,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var f=s.readUshort(o,l);if(l+=2,o.length-l<f)return null;c.instructions=s.readBytes(o,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var m=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;m?(c.xs.push(p?o[l]:-o[l]),l++):p?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)m=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,m?(c.ys.push(p?o[l]:-o[l]),l++):p?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var y=0,E=0;for(u=0;u<h;u++)y+=c.xs[u],E+=c.ys[u],c.xs[u]=y,c.ys[u]=E}else{var x;c.parts=[];do{x=s.readUshort(o,l),l+=2;var R={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(R),R.glyphIndex=s.readUshort(o,l),l+=2,1&x){var C=s.readShort(o,l);l+=2;var A=s.readShort(o,l);l+=2}else C=s.readInt8(o,l),l++,A=s.readInt8(o,l),l++;2&x?(R.m.tx=C,R.m.ty=A):(R.p1=C,R.p2=A),8&x?(R.m.a=R.m.d=s.readF2dot14(o,l),l+=2):64&x?(R.m.a=s.readF2dot14(o,l),l+=2,R.m.d=s.readF2dot14(o,l),l+=2):128&x&&(R.m.a=s.readF2dot14(o,l),l+=2,R.m.b=s.readF2dot14(o,l),l+=2,R.m.c=s.readF2dot14(o,l),l+=2,R.m.d=s.readF2dot14(o,l),l+=2)}while(32&x);if(256&x){var U=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<U;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,s,o){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var f=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,f+c)}if(i==1&&u.fmt==1){var h=l.readUshort(n,s);s+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,s,h))}else if(i==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,s),s+=2;var d=l.readUshort(n,s);s+=2;var g=e._lctf.numOfOnes(h),_=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(n,s);s+=2;for(var p=0;p<m;p++){var y=c+l.readUshort(n,s);s+=2;var E=l.readUshort(n,y);y+=2;for(var x=[],R=0;R<E;R++){var C=l.readUshort(n,y);y+=2,h!=0&&(w=e.GPOS.readValueRecord(n,y,h),y+=2*g),d!=0&&(I=e.GPOS.readValueRecord(n,y,d),y+=2*_),x.push({gid2:C,val1:w,val2:I})}u.pairsets.push(x)}}if(u.fmt==2){var A=l.readUshort(n,s);s+=2;var U=l.readUshort(n,s);s+=2;var M=l.readUshort(n,s);s+=2;var S=l.readUshort(n,s);for(s+=2,u.classDef1=e._lctf.readClassDef(n,c+A),u.classDef2=e._lctf.readClassDef(n,c+U),u.matrix=[],p=0;p<M;p++){var P=[];for(R=0;R<S;R++){var w=null,I=null;h!=0&&(w=e.GPOS.readValueRecord(n,s,h),s+=2*g),d!=0&&(I=e.GPOS.readValueRecord(n,s,d),s+=2*_),P.push({val1:w,val2:I})}u.matrix.push(P)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var L=l.readUshort(n,s);s+=2;var V=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=L;else if(o.ltype!=L)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+V)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,i):0),i+=1&s?2:0,l.push(2&s?o.readShort(n,i):0),i+=2&s?2:0,l.push(4&s?o.readShort(n,i):0),i+=4&s?2:0,l.push(8&s?o.readShort(n,i):0),i+=8&s?2:0,l},e.GPOS.readBaseArray=function(n,i,s){var o=e._bin,l=[],c=i,u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<s;d++)h.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,i))),i+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(n,i){var s=e._bin,o=[],l=i,c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(n,s.readUshort(n,i+2)+l);f.markClass=s.readUshort(n,i),o.push(f),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var s=e._bin,o={};return o.fmt=s.readUshort(n,i),o.x=s.readShort(n,i+2),o.y=s.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var f=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,c+f)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,s),s+=2;else if(u.fmt==2){var h=l.readUshort(n,s);s+=2,u.newg=l.readUshorts(n,s,h),s+=2*u.newg.length}}else if(i==2&&u.fmt==1){h=l.readUshort(n,s),s+=2,u.seqs=[];for(var d=0;d<h;d++){var g=l.readUshort(n,s)+c;s+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(i==4)for(u.vals=[],h=l.readUshort(n,s),s+=2,d=0;d<h;d++){var m=l.readUshort(n,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(i==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(n,s);s+=2,u.cDef=e._lctf.readClassDef(n,c+p),u.scset=[];var y=l.readUshort(n,s);for(s+=2,d=0;d<y;d++){var E=l.readUshort(n,s);s+=2,u.scset.push(E==0?null:e.GSUB.readSubClassSet(n,c+E))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(n,s),s+=2;for(var x=[],R=0;R<h;R++)x.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*R)));s+=2*h,d==0&&(u.backCvg=x),d==1&&(u.inptCvg=x),d==2&&(u.ahedCvg=x)}h=l.readUshort(n,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,s,h)}}else{if(i==7&&u.fmt==1){var C=l.readUshort(n,s);s+=2;var A=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=C;else if(o.ltype!=C)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+A)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var s=e._bin.readUshort,o=i,l=[],c=s(n,i);i+=2;for(var u=0;u<c;u++){var f=s(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+f))}return l},e.GSUB.readSubClassRule=function(n,i){var s=e._bin.readUshort,o={},l=s(n,i),c=s(n,i+=2);i+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+f))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(n,i);i+=2,c==1&&u--,o[l[c]]=s.readUshorts(n,i,u),i+=2*o[l[c]].length}return u=s.readUshort(n,i),i+=2,o.subst=s.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+f))}return l},e.GSUB.readLigature=function(n,i){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,f=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(n,i,s,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,s,o);var u=l.readUshort(n,i);i+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){i+=2,s=l.readUshort(n,i),i+=2;var d=l.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,f)}return f},e.kern.parseV1=function(n,i,s,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(n,i),i+=4;var h=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,s){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2;var h=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,f!=l&&(s.glyph1.push(f),s.rval.push({glyph2:[],vals:[]}));var g=s.rval[s.rval.length-1];g.glyph2.push(h),g.vals.push(d),l=f}return i},e.loca={},e.loca.parse=function(n,i,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,f=o.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(n,i+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(n,i+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,s){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,s){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=i+=2,d=0;d<c;d++){var g=o.readUshort(n,i);i+=2;var _=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var y=o.readUshort(n,i);i+=2;var E=o.readUshort(n,i);i+=2;var x,R=f[p],C=h+12*c+E;if(g==0)x=o.readUnicode(n,C,y/2);else if(g==3&&_==0)x=o.readUnicode(n,C,y/2);else if(_==0)x=o.readASCII(n,C,y);else if(_==1)x=o.readUnicode(n,C,y/2);else if(_==3)x=o.readUnicode(n,C,y/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;x=o.readASCII(n,C,y),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var A="p"+g+","+m.toString(16);l[A]==null&&(l[A]={}),l[A][R!==void 0?R:p]=x,l[A]._lang=m}for(var U in l)if(l[U].postScriptName!=null&&l[U]._lang==1033)return l[U];for(var U in l)if(l[U].postScriptName!=null&&l[U]._lang==0)return l[U];for(var U in l)if(l[U].postScriptName!=null&&l[U]._lang==3084)return l[U];for(var U in l)if(l[U].postScriptName!=null)return l[U];for(var U in l){u=U;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,s){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,i),i+=2,s.usWeightClass=o.readUshort(n,i),i+=2,s.usWidthClass=o.readUshort(n,i),i+=2,s.fsType=o.readUshort(n,i),i+=2,s.ySubscriptXSize=o.readShort(n,i),i+=2,s.ySubscriptYSize=o.readShort(n,i),i+=2,s.ySubscriptXOffset=o.readShort(n,i),i+=2,s.ySubscriptYOffset=o.readShort(n,i),i+=2,s.ySuperscriptXSize=o.readShort(n,i),i+=2,s.ySuperscriptYSize=o.readShort(n,i),i+=2,s.ySuperscriptXOffset=o.readShort(n,i),i+=2,s.ySuperscriptYOffset=o.readShort(n,i),i+=2,s.yStrikeoutSize=o.readShort(n,i),i+=2,s.yStrikeoutPosition=o.readShort(n,i),i+=2,s.sFamilyClass=o.readShort(n,i),i+=2,s.panose=o.readBytes(n,i,10),i+=10,s.ulUnicodeRange1=o.readUint(n,i),i+=4,s.ulUnicodeRange2=o.readUint(n,i),i+=4,s.ulUnicodeRange3=o.readUint(n,i),i+=4,s.ulUnicodeRange4=o.readUint(n,i),i+=4,s.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,s.fsSelection=o.readUshort(n,i),i+=2,s.usFirstCharIndex=o.readUshort(n,i),i+=2,s.usLastCharIndex=o.readUshort(n,i),i+=2,s.sTypoAscender=o.readShort(n,i),i+=2,s.sTypoDescender=o.readShort(n,i),i+=2,s.sTypoLineGap=o.readShort(n,i),i+=2,s.usWinAscent=o.readUshort(n,i),i+=2,s.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,s){var o=e._bin;return i=e["OS/2"].version0(n,i,s),s.ulCodePageRange1=o.readUint(n,i),i+=4,s.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,s){var o=e._bin;return i=e["OS/2"].version1(n,i,s),s.sxHeight=o.readShort(n,i),i+=2,s.sCapHeight=o.readShort(n,i),i+=2,s.usDefault=o.readUshort(n,i),i+=2,s.usBreak=o.readUshort(n,i),i+=2,s.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,s){var o=e._bin;return i=e["OS/2"].version2(n,i,s),s.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,s.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,s){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=i&&i<=f[1])return f[2]+(i-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=i;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,s)}else n.glyf&&e.U._drawGlyf(i,n,s);return s},e.U._drawGlyf=function(n,i,s){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,i,s))},e.U._simpleGlyph=function(n,i){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,f=c==l?o:c+1,h=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[f],_=n.xs[c],m=n.ys[c];if(c==o)if(h){if(!d){e.U.P.moveTo(i,_,m);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+_)/2,(n.ys[u]+m)/2);h?d&&e.U.P.lineTo(i,_,m):g?e.U.P.qcurveTo(i,_,m,n.xs[f],n.ys[f]):e.U.P.qcurveTo(i,_,m,(_+n.xs[f])/2,(m+n.ys[f])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];s.crds.push(h*u.a+d*u.b+u.tx),s.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)s.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(n,i){var s=e._lctf.getInterval(i,n);return s==-1?0:i[s+2]},e.U._applySubs=function(n,i,s,o){for(var l=n.length-i-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,f=s.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,n[i]))!=-1){if(s.ltype==1)n[i],f.fmt==1?n[i]=n[i]+f.delta:n[i]=f.newg[u];else if(s.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var g=h[d],_=g.chain.length;if(!(_>l)){for(var m=!0,p=0,y=0;y<_;y++){for(;n[i+p+(1+y)]==-1;)p++;g.chain[y]!=n[i+p+(1+y)]&&(m=!1)}if(m){for(n[i]=g.nglyph,y=0;y<_+p;y++)n[i+y+1]=-1;break}}}else if(s.ltype==5&&f.fmt==2)for(var E=e._lctf.getInterval(f.cDef,n[i]),x=f.cDef[E+2],R=f.scset[x],C=0;C<R.length;C++){var A=R[C],U=A.input;if(!(U.length>l)){for(m=!0,y=0;y<U.length;y++){var M=e._lctf.getInterval(f.cDef,n[i+1+y]);if(E==-1&&f.cDef[M+2]!=U[y]){m=!1;break}}if(m){var S=A.substLookupRecords;for(d=0;d<S.length;d+=2)S[d],S[d+1]}}}else if(s.ltype==6&&f.fmt==3){if(!e.U._glsCovered(n,f.backCvg,i-f.backCvg.length)||!e.U._glsCovered(n,f.inptCvg,i)||!e.U._glsCovered(n,f.ahedCvg,i+f.inptCvg.length))continue;var P=f.lookupRec;for(C=0;C<P.length;C+=2){E=P[C];var w=o[P[C+1]];e.U._applySubs(n,i+E,w,o)}}}}},e.U._glsCovered=function(n,i,s){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var f=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,h=e.U.glyphToPath(n,u),d=0;d<h.crds.length;d+=2)o.crds.push(h.crds[d]+l),o.crds.push(h.crds[d+1]);for(s&&o.cmds.push(s),d=0;d<h.cmds.length;d++)o.cmds.push(h.cmds[d]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,f))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,s){n.cmds.push("M"),n.crds.push(i,s)},e.U.P.lineTo=function(n,i,s){n.cmds.push("L"),n.crds.push(i,s)},e.U.P.curveTo=function(n,i,s,o,l,c,u){n.cmds.push("C"),n.crds.push(i,s,o,l,c,u)},e.U.P.qcurveTo=function(n,i,s,o,l){n.cmds.push("Q"),n.crds.push(i,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,s,o,l){for(var c=i.stack,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open,g=0,_=i.x,m=i.y,p=0,y=0,E=0,x=0,R=0,C=0,A=0,U=0,M=0,S=0,P={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,P);var w=P.val;if(g+=P.size,w=="o1"||w=="o18")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(w=="o3"||w=="o23")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(w=="o4")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,_,m),d=!0;else if(w=="o5")for(;c.length>0;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);else if(w=="o6"||w=="o7")for(var I=c.length,L=w=="o6",V=0;V<I;V++){var z=c.shift();L?_+=z:m+=z,L=!L,e.U.P.lineTo(l,_,m)}else if(w=="o8"||w=="o24"){I=c.length;for(var ne=0;ne+6<=I;)p=_+c.shift(),y=m+c.shift(),E=p+c.shift(),x=y+c.shift(),_=E+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,p,y,E,x,_,m),ne+=6;w=="o24"&&(_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m))}else{if(w=="o11")break;if(w=="o1234"||w=="o1235"||w=="o1236"||w=="o1237")w=="o1234"&&(y=m,E=(p=_+c.shift())+c.shift(),S=x=y+c.shift(),C=x,U=m,_=(A=(R=(M=E+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,y,E,x,M,S),e.U.P.curveTo(l,R,C,A,U,_,m)),w=="o1235"&&(p=_+c.shift(),y=m+c.shift(),E=p+c.shift(),x=y+c.shift(),M=E+c.shift(),S=x+c.shift(),R=M+c.shift(),C=S+c.shift(),A=R+c.shift(),U=C+c.shift(),_=A+c.shift(),m=U+c.shift(),c.shift(),e.U.P.curveTo(l,p,y,E,x,M,S),e.U.P.curveTo(l,R,C,A,U,_,m)),w=="o1236"&&(p=_+c.shift(),y=m+c.shift(),E=p+c.shift(),S=x=y+c.shift(),C=x,A=(R=(M=E+c.shift())+c.shift())+c.shift(),U=C+c.shift(),_=A+c.shift(),e.U.P.curveTo(l,p,y,E,x,M,S),e.U.P.curveTo(l,R,C,A,U,_,m)),w=="o1237"&&(p=_+c.shift(),y=m+c.shift(),E=p+c.shift(),x=y+c.shift(),M=E+c.shift(),S=x+c.shift(),R=M+c.shift(),C=S+c.shift(),A=R+c.shift(),U=C+c.shift(),Math.abs(A-_)>Math.abs(U-m)?_=A+c.shift():m=U+c.shift(),e.U.P.curveTo(l,p,y,E,x,M,S),e.U.P.curveTo(l,R,C,A,U,_,m));else if(w=="o14"){if(c.length>0&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),c.length==4){var W=c.shift(),K=c.shift(),Y=c.shift(),F=c.shift(),H=e.CFF.glyphBySE(s,Y),Q=e.CFF.glyphBySE(s,F);e.U._drawCFF(s.CharStrings[H],i,s,o,l),i.x=W,i.y=K,e.U._drawCFF(s.CharStrings[Q],i,s,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(w=="o19"||w=="o20")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(w=="o21")c.length>2&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),m+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),d=!0;else if(w=="o22")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),d=!0;else if(w=="o25"){for(;c.length>6;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);p=_+c.shift(),y=m+c.shift(),E=p+c.shift(),x=y+c.shift(),_=E+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,p,y,E,x,_,m)}else if(w=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)p=_,y=m+c.shift(),_=E=p+c.shift(),m=(x=y+c.shift())+c.shift(),e.U.P.curveTo(l,p,y,E,x,_,m);else if(w=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)y=m,E=(p=_+c.shift())+c.shift(),x=y+c.shift(),_=E+c.shift(),m=x,e.U.P.curveTo(l,p,y,E,x,_,m);else if(w=="o10"||w=="o29"){var ee=w=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var j=c.pop(),k=ee.Subrs[j+ee.Bias];i.x=_,i.y=m,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d,e.U._drawCFF(k,i,s,o,l),_=i.x,m=i.y,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open}}else if(w=="o30"||w=="o31"){var G=c.length,Z=(ne=0,w=="o31");for(ne+=G-(I=-3&G);ne<I;)Z?(y=m,E=(p=_+c.shift())+c.shift(),m=(x=y+c.shift())+c.shift(),I-ne==5?(_=E+c.shift(),ne++):_=E,Z=!1):(p=_,y=m+c.shift(),E=p+c.shift(),x=y+c.shift(),_=E+c.shift(),I-ne==5?(m=x+c.shift(),ne++):m=x,Z=!0),e.U.P.curveTo(l,p,y,E,x,_,m),ne+=4}else{if((w+"").charAt(0)=="o")throw console.debug("Unknown operation: "+w,n),w;c.push(w)}}}i.x=_,i.y=m,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d};var t=e,r={Typr:t};return a.Typr=t,a.default=r,Object.defineProperty(a,"__esModule",{value:!0}),a})({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function ad(){return(function(a){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(w,I){for(var L=new t(31),V=0;V<31;++V)L[V]=I+=1<<w[V-1];var z=new r(L[30]);for(V=1;V<30;++V)for(var ne=L[V];ne<L[V+1];++ne)z[ne]=ne-L[V]<<5|V;return[L,z]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=o(i,0)[0],h=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(w,I,L){for(var V=w.length,z=0,ne=new t(I);z<V;++z)++ne[w[z]-1];var W,K=new t(I);for(z=0;z<I;++z)K[z]=K[z-1]+ne[z-1]<<1;{W=new t(1<<I);var Y=15-I;for(z=0;z<V;++z)if(w[z])for(var F=z<<4|w[z],H=I-w[z],Q=K[w[z]-1]++<<H,ee=Q|(1<<H)-1;Q<=ee;++Q)W[h[Q]>>>Y]=F}return W},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var y=_(m,9),E=_(p,5),x=function(w){for(var I=w[0],L=1;L<w.length;++L)w[L]>I&&(I=w[L]);return I},R=function(w,I,L){var V=I/8|0;return(w[V]|w[V+1]<<8)>>(7&I)&L},C=function(w,I){var L=I/8|0;return(w[L]|w[L+1]<<8|w[L+2]<<16)>>(7&I)},A=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],U=function(w,I,L){var V=new Error(I||A[w]);if(V.code=w,Error.captureStackTrace&&Error.captureStackTrace(V,U),!L)throw V;return V},M=function(w,I,L){var V=w.length;if(!V||L&&!L.l&&V<5)return I||new e(0);var z=!I||L,ne=!L||L.i;L||(L={}),I||(I=new e(3*V));var W,K=function(Te){var Ue=I.length;if(Te>Ue){var be=new e(Math.max(2*Ue,Te));be.set(I),I=be}},Y=L.f||0,F=L.p||0,H=L.b||0,Q=L.l,ee=L.d,j=L.m,k=L.n,G=8*V;do{if(!Q){L.f=Y=R(w,F,1);var Z=R(w,F+1,3);if(F+=3,!Z){var de=w[(ye=((W=F)/8|0)+(7&W&&1)+4)-4]|w[ye-3]<<8,pe=ye+de;if(pe>V){ne&&U(0);break}z&&K(H+de),I.set(w.subarray(ye,pe),H),L.b=H+=de,L.p=F=8*pe;continue}if(Z==1)Q=y,ee=E,j=9,k=5;else if(Z==2){var he=R(w,F,31)+257,ge=R(w,F+10,15)+4,D=he+R(w,F+5,31)+1;F+=14;for(var Fe=new e(D),Me=new e(19),Ee=0;Ee<ge;++Ee)Me[s[Ee]]=R(w,F+3*Ee,7);F+=3*ge;var me=x(Me),xe=(1<<me)-1,fe=_(Me,me);for(Ee=0;Ee<D;){var ye,ce=fe[R(w,F,xe)];if(F+=15&ce,(ye=ce>>>4)<16)Fe[Ee++]=ye;else{var Ge=0,b=0;for(ye==16?(b=3+R(w,F,3),F+=2,Ge=Fe[Ee-1]):ye==17?(b=3+R(w,F,7),F+=3):ye==18&&(b=11+R(w,F,127),F+=7);b--;)Fe[Ee++]=Ge}}var v=Fe.subarray(0,he),O=Fe.subarray(he);j=x(v),k=x(O),Q=_(v,j),ee=_(O,k)}else U(1);if(F>G){ne&&U(0);break}}z&&K(H+131072);for(var $=(1<<j)-1,J=(1<<k)-1,X=F;;X=F){var Se=(Ge=Q[C(w,F)&$])>>>4;if((F+=15&Ge)>G){ne&&U(0);break}if(Ge||U(2),Se<256)I[H++]=Se;else{if(Se==256){X=F,Q=null;break}var le=Se-254;if(Se>264){var Re=n[Ee=Se-257];le=R(w,F,(1<<Re)-1)+c[Ee],F+=Re}var Ce=ee[C(w,F)&J],oe=Ce>>>4;if(Ce||U(3),F+=15&Ce,O=f[oe],oe>3&&(Re=i[oe],O+=C(w,F)&(1<<Re)-1,F+=Re),F>G){ne&&U(0);break}z&&K(H+131072);for(var _e=H+le;H<_e;H+=4)I[H]=I[H-O],I[H+1]=I[H+1-O],I[H+2]=I[H+2-O],I[H+3]=I[H+3-O];H=_e}}L.l=Q,L.p=X,L.b=H,Q&&(Y=1,L.m=j,L.d=ee,L.n=k)}while(!Y);return H==I.length?I:(function(Te,Ue,be){(be==null||be>Te.length)&&(be=Te.length);var Ve=new(Te instanceof t?t:Te instanceof r?r:e)(be-Ue);return Ve.set(Te.subarray(Ue,be)),Ve})(I,0,H)},S=new e(0),P=typeof TextDecoder<"u"&&new TextDecoder;try{P.decode(S,{stream:!0})}catch{}return a.convert_streams=function(w){var I=new DataView(w),L=0;function V(){var he=I.getUint16(L);return L+=2,he}function z(){var he=I.getUint32(L);return L+=4,he}function ne(he){de.setUint16(pe,he),pe+=2}function W(he){de.setUint32(pe,he),pe+=4}for(var K={signature:z(),flavor:z(),length:z(),numTables:V(),reserved:V(),totalSfntSize:z(),majorVersion:V(),minorVersion:V(),metaOffset:z(),metaLength:z(),metaOrigLength:z(),privOffset:z(),privLength:z()},Y=0;Math.pow(2,Y)<=K.numTables;)Y++;Y--;for(var F=16*Math.pow(2,Y),H=16*K.numTables-F,Q=12,ee=[],j=0;j<K.numTables;j++)ee.push({tag:z(),offset:z(),compLength:z(),origLength:z(),origChecksum:z()}),Q+=16;var k,G=new Uint8Array(12+16*ee.length+ee.reduce((function(he,ge){return he+ge.origLength+4}),0)),Z=G.buffer,de=new DataView(Z),pe=0;return W(K.flavor),ne(K.numTables),ne(F),ne(Y),ne(H),ee.forEach((function(he){W(he.tag),W(he.origChecksum),W(Q),W(he.origLength),he.outOffset=Q,(Q+=he.origLength)%4!=0&&(Q+=4-Q%4)})),ee.forEach((function(he){var ge,D=w.slice(he.offset,he.offset+he.compLength);if(he.compLength!=he.origLength){var Fe=new Uint8Array(he.origLength);ge=new Uint8Array(D,2),M(ge,Fe)}else Fe=new Uint8Array(D);G.set(Fe,he.outOffset);var Me=0;(Q=he.outOffset+he.origLength)%4!=0&&(Me=4-Q%4),G.set(new Uint8Array(Me).buffer,he.outOffset+he.origLength),k=Q+Me})),Z.slice(0,k)},Object.defineProperty(a,"__esModule",{value:!0}),a})({}).convert_streams}function sd(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,s=4,o=8,l=16,c=32;let u;function f(A){if(!u){const U={R:i,L:n,D:s,C:l,U:c,T:o};u=new Map;for(let M in r){let S=0;r[M].split(",").forEach(P=>{let[w,I]=P.split("+");w=parseInt(w,36),I=I?parseInt(I,36):0,u.set(S+=w,U[M]);for(let L=I;L--;)u.set(++S,U[M])})}}return u.get(A)||c}const h=1,d=2,g=3,_=4,m=[null,"isol","init","fina","medi"];function p(A){const U=new Uint8Array(A.length);let M=c,S=h,P=-1;for(let w=0;w<A.length;w++){const I=A.codePointAt(w);let L=f(I)|0,V=h;L&o||(M&(n|s|l)?L&(i|s|l)?(V=g,(S===h||S===g)&&U[P]++):L&(n|c)&&(S===d||S===_)&&U[P]--:M&(i|c)&&(S===d||S===_)&&U[P]--,S=U[w]=V,M=L,P=w,I>65535&&w++)}return U}function y(A,U){const M=[];for(let P=0;P<U.length;P++){const w=U.codePointAt(P);w>65535&&P++,M.push(a.U.codeToGlyph(A,w))}const S=A.GSUB;if(S){const{lookupList:P,featureList:w}=S;let I;const L=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,V=[];w.forEach(z=>{if(L.test(z.tag))for(let ne=0;ne<z.tab.length;ne++){if(V[z.tab[ne]])continue;V[z.tab[ne]]=!0;const W=P[z.tab[ne]],K=/^(isol|init|fina|medi)$/.test(z.tag);K&&!I&&(I=p(U));for(let Y=0;Y<M.length;Y++)(!I||!K||m[I[Y]]===z.tag)&&a.U._applySubs(M,Y,W,P)}})}return M}function E(A,U){const M=new Int16Array(U.length*3);let S=0;for(;S<U.length;S++){const L=U[S];if(L===-1)continue;M[S*3+2]=A.hmtx.aWidth[L];const V=A.GPOS;if(V){const z=V.lookupList;for(let ne=0;ne<z.length;ne++){const W=z[ne];for(let K=0;K<W.tabs.length;K++){const Y=W.tabs[K];if(W.ltype===1){if(a._lctf.coverageIndex(Y.coverage,L)!==-1&&Y.pos){I(Y.pos,S);break}}else if(W.ltype===2){let F=null,H=P();if(H!==-1){const Q=a._lctf.coverageIndex(Y.coverage,U[H]);if(Q!==-1){if(Y.fmt===1){const ee=Y.pairsets[Q];for(let j=0;j<ee.length;j++)ee[j].gid2===L&&(F=ee[j])}else if(Y.fmt===2){const ee=a.U._getGlyphClass(U[H],Y.classDef1),j=a.U._getGlyphClass(L,Y.classDef2);F=Y.matrix[ee][j]}if(F){F.val1&&I(F.val1,H),F.val2&&I(F.val2,S);break}}}}else if(W.ltype===4){const F=a._lctf.coverageIndex(Y.markCoverage,L);if(F!==-1){const H=P(w),Q=H===-1?-1:a._lctf.coverageIndex(Y.baseCoverage,U[H]);if(Q!==-1){const ee=Y.markArray[F],j=Y.baseArray[Q][ee.markClass];M[S*3]=j.x-ee.x+M[H*3]-M[H*3+2],M[S*3+1]=j.y-ee.y+M[H*3+1];break}}}else if(W.ltype===6){const F=a._lctf.coverageIndex(Y.mark1Coverage,L);if(F!==-1){const H=P();if(H!==-1){const Q=U[H];if(x(A,Q)===3){const ee=a._lctf.coverageIndex(Y.mark2Coverage,Q);if(ee!==-1){const j=Y.mark1Array[F],k=Y.mark2Array[ee][j.markClass];M[S*3]=k.x-j.x+M[H*3]-M[H*3+2],M[S*3+1]=k.y-j.y+M[H*3+1];break}}}}}}}}else if(A.kern&&!A.cff){const z=P();if(z!==-1){const ne=A.kern.glyph1.indexOf(U[z]);if(ne!==-1){const W=A.kern.rval[ne].glyph2.indexOf(L);W!==-1&&(M[z*3+2]+=A.kern.rval[ne].vals[W])}}}}return M;function P(L){for(let V=S-1;V>=0;V--)if(U[V]!==-1&&(!L||L(U[V])))return V;return-1}function w(L){return x(A,L)===1}function I(L,V){for(let z=0;z<3;z++)M[V*3+z]+=L[z]||0}}function x(A,U){const M=A.GDEF&&A.GDEF.glyphClassDef;return M?a.U._getGlyphClass(U,M):0}function R(...A){for(let U=0;U<A.length;U++)if(typeof A[U]=="number")return A[U]}function C(A){const U=Object.create(null),M=A["OS/2"],S=A.hhea,P=A.head.unitsPerEm,w=R(M&&M.sTypoAscender,S&&S.ascender,P),I={unitsPerEm:P,ascender:w,descender:R(M&&M.sTypoDescender,S&&S.descender,0),capHeight:R(M&&M.sCapHeight,w),xHeight:R(M&&M.sxHeight,w),lineGap:R(M&&M.sTypoLineGap,S&&S.lineGap),supportsCodePoint(L){return a.U.codeToGlyph(A,L)>0},forEachGlyph(L,V,z,ne){let W=0;const K=1/I.unitsPerEm*V,Y=y(A,L);let F=0;const H=E(A,Y);return Y.forEach((Q,ee)=>{if(Q!==-1){let j=U[Q];if(!j){const{cmds:k,crds:G}=a.U.glyphToPath(A,Q);let Z="",de=0;for(let Fe=0,Me=k.length;Fe<Me;Fe++){const Ee=t[k[Fe]];Z+=k[Fe];for(let me=1;me<=Ee;me++)Z+=(me>1?",":"")+G[de++]}let pe,he,ge,D;if(G.length){pe=he=1/0,ge=D=-1/0;for(let Fe=0,Me=G.length;Fe<Me;Fe+=2){let Ee=G[Fe],me=G[Fe+1];Ee<pe&&(pe=Ee),me<he&&(he=me),Ee>ge&&(ge=Ee),me>D&&(D=me)}}else pe=ge=he=D=0;j=U[Q]={index:Q,advanceWidth:A.hmtx.aWidth[Q],xMin:pe,yMin:he,xMax:ge,yMax:D,path:Z}}ne.call(null,j,W+H[ee*3]*K,H[ee*3+1]*K,F),W+=H[ee*3+2]*K,z&&(W+=z*V)}F+=L.codePointAt(F)>65535?2:1}),W}};return I}return function(U){const M=new Uint8Array(U,0,4),S=a._bin.readASCII(M,0,4);if(S==="wOFF")U=e(U);else if(S==="wOF2")throw new Error("woff2 fonts not supported");return C(a.parse(U)[0])}}const od=ci({name:"Typr Font Parser",dependencies:[rd,ad,sd],init(a,e,t){const r=a(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function ld(){return(function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(E){var x=E>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&E))},e.prototype.has=function(E){var x=this.buckets.get(E>>5);return x!==void 0&&(x&1<<(31&E))!=0},e.prototype.serialize=function(){var E=[];return this.buckets.forEach((function(x,R){E.push((+R).toString(36)+":"+x.toString(36))})),E.join(",")},e.prototype.deserialize=function(E){var x=this;this.buckets.clear(),E.split(",").forEach((function(R){var C=R.split(":");x.buckets.set(parseInt(C[0],36),parseInt(C[1],36))}))};var t=Math.pow(2,8),r=t-1,n=~r;function i(E){var x=(function(C){return C&n})(E).toString(16),R=(function(C){return(C&n)+t-1})(E).toString(16);return"codepoint-index/plane"+(E>>16)+"/"+x+"-"+R+".json"}function s(E,x){var R=E&r,C=x.codePointAt(R/6|0);return((C=(C||48)-48)&1<<R%6)!=0}function o(E,x){var R;(R=E,R.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(C){return C.split("-").map((function(A){return parseInt(A.trim(),16)}))}))).forEach((function(C){var A=C[0],U=C[1];U===void 0&&(U=A),x(A,U)}))}function l(E,x){o(E,(function(R,C){for(var A=R;A<=C;A++)x(A)}))}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(E){var x=f.get(E);return x||(x=new e,l(E.ranges,(function(R){return x.add(R)})),f.set(E,x)),x}var g,_=new Map;function m(E,x,R){return E[x]?x:E[R]?R:(function(C){for(var A in C)return A})(E)}function p(E,x){var R=x;if(!E.includes(R)){R=1/0;for(var C=0;C<E.length;C++)Math.abs(E[C]-x)<Math.abs(R-x)&&(R=E[C])}return R}function y(E){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(x){g.add(x)}))),g.has(E)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(E,x){x===void 0&&(x={});var R,C=x.lang;C===void 0&&(C=new RegExp("\\p{Script=Hangul}","u").test(R=E)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(R)?"ja":"en");var A=x.category;A===void 0&&(A="sans-serif");var U=x.style;U===void 0&&(U="normal");var M=x.weight;M===void 0&&(M=400);var S=(x.dataUrl||h).replace(/\/$/g,""),P=new Map,w=new Uint8Array(E.length),I={},L={},V=new Array(E.length),z=new Map,ne=!1;function W(F){var H=_.get(F);return H||(H=fetch(S+"/"+F).then((function(Q){if(!Q.ok)throw new Error(Q.statusText);return Q.json().then((function(ee){if(!Array.isArray(ee)||ee[0]!==1)throw new Error("Incorrect schema version; need 1, got "+ee[0]);return ee[1]}))})).catch((function(Q){if(S!==h)return ne||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+S+'", trying default CDN. '+Q.message),ne=!0),S=h,_.delete(F),W(F);throw Q})),_.set(F,H)),H}for(var K=function(F){var H=E.codePointAt(F),Q=i(H);V[F]=Q,c[Q]||z.has(Q)||z.set(Q,W(Q).then((function(ee){c[Q]=ee}))),H>65535&&(F++,Y=F)},Y=0;Y<E.length;Y++)K(Y);return Promise.all(z.values()).then((function(){z.clear();for(var F=function(Q){var ee=E.codePointAt(Q),j=null,k=c[V[Q]],G=void 0;for(var Z in k){var de=L[Z];if(de===void 0&&(de=L[Z]=new RegExp(Z).test(C||"en")),de){for(var pe in G=Z,k[Z])if(s(ee,k[Z][pe])){j=pe;break}break}}if(!j){e:for(var he in k)if(he!==G){for(var ge in k[he])if(s(ee,k[he][ge])){j=ge;break e}}}j||(console.debug("No font coverage for U+"+ee.toString(16)),j="latin"),V[Q]=j,u[j]||z.has(j)||z.set(j,W("font-meta/"+j+".json").then((function(D){u[j]=D}))),ee>65535&&(Q++,H=Q)},H=0;H<E.length;H++)F(H);return Promise.all(z.values())})).then((function(){for(var F,H=null,Q=0;Q<E.length;Q++){var ee=E.codePointAt(Q);if(H&&(y(ee)||d(H).has(ee)))w[Q]=w[Q-1];else{H=u[V[Q]];var j=I[H.id];if(!j){var k=H.typeforms,G=m(k,A,"sans-serif"),Z=m(k[G],U,"normal"),de=p((F=k[G])===null||F===void 0?void 0:F[Z],M);j=I[H.id]=S+"/font-files/"+H.id+"/"+G+"."+Z+"."+de+".woff"}var pe=P.get(j);pe==null&&(pe=P.size,P.set(j,pe)),w[Q]=pe}ee>65535&&(Q++,w[Q]=w[Q-1])}return{fontUrls:Array.from(P.keys()),chars:w}}))},Object.defineProperty(a,"__esModule",{value:!0}),a})({})}function cd(a,e){const t=Object.create(null),r=Object.create(null);function n(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=s,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(s,o){let l=t[s];l?o(l):r[s]?r[s].push(o):(r[s]=[o],n(s,c=>{c.src=s,t[s]=c,r[s].forEach(u=>u(c)),delete r[s]}))}return function(s,o,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(s.length),g=[];s.length||y();const _=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(x=>!x.lang||x.lang.test(l)).reverse(),c.length){let A=0;(function U(M=0){for(let S=M,P=s.length;S<P;S++){const w=s.codePointAt(S);if(A===1&&g[d[S-1]].supportsCodePoint(w)||S>0&&/\s/.test(s[S]))d[S]=d[S-1],A===2&&(m[m.length-1][1]=S);else for(let I=d[S],L=c.length;I<=L;I++)if(I===L){const V=A===2?m[m.length-1]:m[m.length]=[S,S];V[1]=S,A=2}else{d[S]=I;const{src:V,unicodeRange:z}=c[I];if(!z||E(w,z)){const ne=t[V];if(!ne){i(V,()=>{U(S)});return}if(ne.supportsCodePoint(w)){let W=_.get(ne);typeof W!="number"&&(W=g.length,g.push(ne),_.set(ne,W)),d[S]=W,A=1;break}}}w>65535&&S+1<P&&(d[S+1]=d[S],S++,A===2&&(m[m.length-1][1]=S))}p()})()}else m.push([0,s.length-1]),p();function p(){if(m.length){const x=m.map(R=>s.substring(R[0],R[1]+1)).join(`
`);e.getFontsForString(x,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:R,chars:C})=>{const A=g.length;let U=0;m.forEach(S=>{for(let P=0,w=S[1]-S[0];P<=w;P++)d[S[0]+P]=C[U++]+A;U++});let M=0;R.forEach((S,P)=>{i(S,w=>{g[P+A]=w,++M===R.length&&y()})})})}else y()}function y(){o({chars:d,fonts:g})}function E(x,R){for(let C=0;C<R.length;C++){const[A,U=A]=R[C];if(A<=x&&x<=U)return!0}return!1}}}const ud=ci({name:"FontResolver",dependencies:[cd,od,ld],init(a,e,t){return a(e,t())}});function fd(a,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:g,lang:_,fonts:m,style:p,weight:y,preResolvedFonts:E,unicodeFontsURL:x},R){const C=({chars:A,fonts:U})=>{let M,S;const P=[];for(let w=0;w<A.length;w++)A[w]!==S?(S=A[w],P.push(M={start:w,end:w,fontObj:U[A[w]]})):M.end=w;R(P)};E?C(E):a(g,C,{lang:_,fonts:m,style:p,weight:y,unicodeFontsURL:x})}function o({text:g="",font:_,lang:m,sdfGlyphSize:p=64,fontSize:y=400,fontWeight:E=1,fontStyle:x="normal",letterSpacing:R=0,lineHeight:C="normal",maxWidth:A=1/0,direction:U,textAlign:M="left",textIndent:S=0,whiteSpace:P="normal",overflowWrap:w="normal",anchorX:I=0,anchorY:L=0,metricsOnly:V=!1,unicodeFontsURL:z,preResolvedFonts:ne=null,includeCaretPositions:W=!1,chunkedBoundsSize:K=8192,colorRanges:Y=null},F){const H=f(),Q={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,R=+R,A=+A,C=C||"normal",S=+S,s({text:g,lang:m,style:x,weight:E,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:z,preResolvedFonts:ne},ee=>{Q.fontLoad=f()-H;const j=isFinite(A);let k=null,G=null,Z=null,de=null,pe=null,he=null,ge=null,D=null,Fe=0,Me=0,Ee=P!=="nowrap";const me=new Map,xe=f();let fe=S,ye=0,ce=new h;const Ge=[ce];ee.forEach(J=>{const{fontObj:X}=J,{ascender:Se,descender:le,unitsPerEm:Re,lineGap:Ce,capHeight:oe,xHeight:_e}=X;let Te=me.get(X);if(!Te){const se=y/Re,ve=C==="normal"?(Se-le+Ce)*se:C*y,Le=(ve-(Se-le)*se)/2,ue=Math.min(ve,(Se-le)*se),ie=(Se+le)/2*se+ue/2;Te={index:me.size,src:X.src,fontObj:X,fontSizeMult:se,unitsPerEm:Re,ascender:Se*se,descender:le*se,capHeight:oe*se,xHeight:_e*se,lineHeight:ve,baseline:-Le-Se*se,caretTop:ie,caretBottom:ie-ue},me.set(X,Te)}const{fontSizeMult:Ue}=Te,be=g.slice(J.start,J.end+1);let Ve,B;X.forEachGlyph(be,y,R,(se,ve,Le,ue)=>{ve+=ye,ue+=J.start,Ve=ve,B=se;const ie=g.charAt(ue),we=se.advanceWidth*Ue,Ie=ce.count;let Ne;if("isEmpty"in se||(se.isWhitespace=!!ie&&new RegExp(n).test(ie),se.canBreakAfter=!!ie&&i.test(ie),se.isEmpty=se.xMin===se.xMax||se.yMin===se.yMax||r.test(ie)),!se.isWhitespace&&!se.isEmpty&&Me++,Ee&&j&&!se.isWhitespace&&ve+we+fe>A&&Ie){if(ce.glyphAt(Ie-1).glyphObj.canBreakAfter)Ne=new h,fe=-ve;else for(let st=Ie;st--;)if(st===0&&w==="break-word"){Ne=new h,fe=-ve;break}else if(ce.glyphAt(st).glyphObj.canBreakAfter){Ne=ce.splitAt(st+1);const rt=Ne.glyphAt(0).x;fe-=rt;for(let ut=Ne.count;ut--;)Ne.glyphAt(ut).x-=rt;break}Ne&&(ce.isSoftWrapped=!0,ce=Ne,Ge.push(ce),Fe=A)}let He=ce.glyphAt(ce.count);He.glyphObj=se,He.x=ve+fe,He.y=Le,He.width=we,He.charIndex=ue,He.fontData=Te,ie===`
`&&(ce=new h,Ge.push(ce),fe=-(ve+we+R*y)+S)}),ye=Ve+B.advanceWidth*Ue+R*y});let b=0;Ge.forEach(J=>{let X=!0;for(let Se=J.count;Se--;){const le=J.glyphAt(Se);X&&!le.glyphObj.isWhitespace&&(J.width=le.x+le.width,J.width>Fe&&(Fe=J.width),X=!1);let{lineHeight:Re,capHeight:Ce,xHeight:oe,baseline:_e}=le.fontData;Re>J.lineHeight&&(J.lineHeight=Re);const Te=_e-J.baseline;Te<0&&(J.baseline+=Te,J.cap+=Te,J.ex+=Te),J.cap=Math.max(J.cap,J.baseline+Ce),J.ex=Math.max(J.ex,J.baseline+oe)}J.baseline-=b,J.cap-=b,J.ex-=b,b+=J.lineHeight});let v=0,O=0;if(I&&(typeof I=="number"?v=-I:typeof I=="string"&&(v=-Fe*(I==="left"?0:I==="center"?.5:I==="right"?1:c(I)))),L&&(typeof L=="number"?O=-L:typeof L=="string"&&(O=L==="top"?0:L==="top-baseline"?-Ge[0].baseline:L==="top-cap"?-Ge[0].cap:L==="top-ex"?-Ge[0].ex:L==="middle"?b/2:L==="bottom"?b:L==="bottom-baseline"?-Ge[Ge.length-1].baseline:c(L)*b)),!V){const J=e.getEmbeddingLevels(g,U);k=new Uint16Array(Me),G=new Uint8Array(Me),Z=new Float32Array(Me*2),de={},ge=[1/0,1/0,-1/0,-1/0],D=[],W&&(he=new Float32Array(g.length*4)),Y&&(pe=new Uint8Array(Me*3));let X=0,Se=-1,le=-1,Re,Ce;if(Ge.forEach((oe,_e)=>{let{count:Te,width:Ue}=oe;if(Te>0){let be=0;for(let ue=Te;ue--&&oe.glyphAt(ue).glyphObj.isWhitespace;)be++;let Ve=0,B=0;if(M==="center")Ve=(Fe-Ue)/2;else if(M==="right")Ve=Fe-Ue;else if(M==="justify"&&oe.isSoftWrapped){let ue=0;for(let ie=Te-be;ie--;)oe.glyphAt(ie).glyphObj.isWhitespace&&ue++;B=(Fe-Ue)/ue}if(B||Ve){let ue=0;for(let ie=0;ie<Te;ie++){let we=oe.glyphAt(ie);const Ie=we.glyphObj;we.x+=Ve+ue,B!==0&&Ie.isWhitespace&&ie<Te-be&&(ue+=B,we.width+=B)}}const se=e.getReorderSegments(g,J,oe.glyphAt(0).charIndex,oe.glyphAt(oe.count-1).charIndex);for(let ue=0;ue<se.length;ue++){const[ie,we]=se[ue];let Ie=1/0,Ne=-1/0;for(let He=0;He<Te;He++)if(oe.glyphAt(He).charIndex>=ie){let st=He,rt=He;for(;rt<Te;rt++){let ut=oe.glyphAt(rt);if(ut.charIndex>we)break;rt<Te-be&&(Ie=Math.min(Ie,ut.x),Ne=Math.max(Ne,ut.x+ut.width))}for(let ut=st;ut<rt;ut++){const mt=oe.glyphAt(ut);mt.x=Ne-(mt.x+mt.width-Ie)}break}}let ve;const Le=ue=>ve=ue;for(let ue=0;ue<Te;ue++){const ie=oe.glyphAt(ue);ve=ie.glyphObj;const we=ve.index,Ie=J.levels[ie.charIndex]&1;if(Ie){const Ne=e.getMirroredCharacter(g[ie.charIndex]);Ne&&ie.fontData.fontObj.forEachGlyph(Ne,0,0,Le)}if(W){const{charIndex:Ne,fontData:He}=ie,st=ie.x+v,rt=ie.x+ie.width+v;he[Ne*4]=Ie?rt:st,he[Ne*4+1]=Ie?st:rt,he[Ne*4+2]=oe.baseline+He.caretBottom+O,he[Ne*4+3]=oe.baseline+He.caretTop+O;const ut=Ne-Se;ut>1&&u(he,Se,ut),Se=Ne}if(Y){const{charIndex:Ne}=ie;for(;Ne>le;)le++,Y.hasOwnProperty(le)&&(Ce=Y[le])}if(!ve.isWhitespace&&!ve.isEmpty){const Ne=X++,{fontSizeMult:He,src:st,index:rt}=ie.fontData,ut=de[st]||(de[st]={});ut[we]||(ut[we]={path:ve.path,pathBounds:[ve.xMin,ve.yMin,ve.xMax,ve.yMax]});const mt=ie.x+v,Nt=ie.y+oe.baseline+O;Z[Ne*2]=mt,Z[Ne*2+1]=Nt;const Ot=mt+ve.xMin*He,Wt=Nt+ve.yMin*He,Bt=mt+ve.xMax*He,Gt=Nt+ve.yMax*He;Ot<ge[0]&&(ge[0]=Ot),Wt<ge[1]&&(ge[1]=Wt),Bt>ge[2]&&(ge[2]=Bt),Gt>ge[3]&&(ge[3]=Gt),Ne%K===0&&(Re={start:Ne,end:Ne,rect:[1/0,1/0,-1/0,-1/0]},D.push(Re)),Re.end++;const dt=Re.rect;if(Ot<dt[0]&&(dt[0]=Ot),Wt<dt[1]&&(dt[1]=Wt),Bt>dt[2]&&(dt[2]=Bt),Gt>dt[3]&&(dt[3]=Gt),k[Ne]=we,G[Ne]=rt,Y){const en=Ne*3;pe[en]=Ce>>16&255,pe[en+1]=Ce>>8&255,pe[en+2]=Ce&255}}}}}),he){const oe=g.length-Se;oe>1&&u(he,Se,oe)}}const $=[];me.forEach(({index:J,src:X,unitsPerEm:Se,ascender:le,descender:Re,lineHeight:Ce,capHeight:oe,xHeight:_e})=>{$[J]={src:X,unitsPerEm:Se,ascender:le,descender:Re,lineHeight:Ce,capHeight:oe,xHeight:_e}}),Q.typesetting=f()-xe,F({glyphIds:k,glyphFontIndices:G,glyphPositions:Z,glyphData:de,fontData:$,caretPositions:he,glyphColors:pe,chunkedBounds:D,fontSize:y,topBaseline:O+Ge[0].baseline,blockBounds:[v,O-b,v+Fe,O],visibleBounds:ge,timings:Q})})}function l(g,_){o({...g,metricsOnly:!0},m=>{const[p,y,E,x]=m.blockBounds;_({width:E-p,height:x-y})})}function c(g){let _=g.match(/^([\d.]+)%$/),m=_?parseFloat(_[1]):NaN;return isNaN(m)?0:m/100}function u(g,_,m){const p=g[_*4],y=g[_*4+1],E=g[_*4+2],x=g[_*4+3],R=(y-p)/m;for(let C=0;C<m;C++){const A=(_+C)*4;g[A]=p+R*C,g[A+1]=p+R*(C+1),g[A+2]=E,g[A+3]=x}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=h.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new h;return _.data=this.data.splice(g*d.length),_}},h.flyweight=d.reduce((g,_,m,p)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+m]},set(y){this.data[this.index*d.length+m]=y}}),g),{data:null,index:0}),{typeset:o,measure:l}}const Fn=()=>(self.performance||Date).now(),Tr=mo();let Bs;function hd(a,e,t,r,n,i,s,o,l,c,u=!0){return u?pd(a,e,t,r,n,i,s,o,l,c).then(null,f=>(Bs||(console.warn("WebGL SDF generation failed, falling back to JS",f),Bs=!0),ks(a,e,t,r,n,i,s,o,l,c))):ks(a,e,t,r,n,i,s,o,l,c)}const vr=[],dd=5;let Ea=0;function _o(){const a=Fn();for(;vr.length&&Fn()-a<dd;)vr.shift()();Ea=vr.length?setTimeout(_o,0):0}const pd=(...a)=>new Promise((e,t)=>{vr.push(()=>{const r=Fn();try{Tr.webgl.generateIntoCanvas(...a),e({timing:Fn()-r})}catch(n){t(n)}}),Ea||(Ea=setTimeout(_o,0))}),md=4,gd=2e3,Gs={};let _d=0;function ks(a,e,t,r,n,i,s,o,l,c){const u="TroikaTextSDFGenerator_JS_"+_d++%md;let f=Gs[u];return f||(f=Gs[u]={workerModule:ci({name:u,workerId:u,dependencies:[mo,Fn],init(h,d){const g=h().javascript.generate;return function(..._){const m=d();return{textureData:g(..._),timing:d()-m}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(a,e,t,r,n,i).then(({textureData:h,timing:d})=>{const g=Fn(),_=new Uint8Array(h.length*4);for(let m=0;m<h.length;m++)_[m*4+c]=h[m];return Tr.webglUtils.renderImageData(s,_,o,l,a,e,1<<3-c),d+=Fn()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{Kh(u)},gd)),{timing:d}})}function vd(a){a._warm||(Tr.webgl.isSupported(a),a._warm=!0)}const xd=Tr.webglUtils.resizeWebGLCanvasWithoutClearing,wi={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Sd=new Je;function ei(){return(self.performance||Date).now()}const zs=Object.create(null);function Md(a,e){a=yd({},a);const t=ei(),r=[];if(a.font&&r.push({label:"user",src:Td(a.font)}),a.font=r,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||wi.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||wi.unicodeFontsURL,a.colorRanges!=null){let h={};for(let d in a.colorRanges)if(a.colorRanges.hasOwnProperty(d)){let g=a.colorRanges[d];typeof g!="number"&&(g=Sd.set(g).getHex()),h[d]=g}a.colorRanges=h}Object.freeze(a);const{textureWidth:n,sdfExponent:i}=wi,{sdfGlyphSize:s}=a,o=n/s*4;let l=zs[s];if(!l){const h=document.createElement("canvas");h.width=n,h.height=s*256/o,l=zs[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:h,sdfTexture:new wt(h,void 0,void 0,void 0,1006,1006),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,Ed(l)}const{sdfTexture:c,sdfCanvas:u}=l;So(a).then(h=>{const{glyphIds:d,glyphFontIndices:g,fontData:_,glyphPositions:m,fontSize:p,timings:y}=h,E=[],x=new Float32Array(d.length*4);let R=0,C=0;const A=ei(),U=_.map(I=>{let L=l.glyphsByFont.get(I.src);return L||l.glyphsByFont.set(I.src,L=new Map),L});d.forEach((I,L)=>{const V=g[L],{src:z,unitsPerEm:ne}=_[V];let W=U[V].get(I);if(!W){const{path:Q,pathBounds:ee}=h.glyphData[z][I],j=Math.max(ee[2]-ee[0],ee[3]-ee[1])/s*(wi.sdfMargin*s+.5),k=l.glyphCount++,G=[ee[0]-j,ee[1]-j,ee[2]+j,ee[3]+j];U[V].set(I,W={path:Q,atlasIndex:k,sdfViewBox:G}),E.push(W)}const{sdfViewBox:K}=W,Y=m[C++],F=m[C++],H=p/ne;x[R++]=Y+K[0]*H,x[R++]=F+K[1]*H,x[R++]=Y+K[2]*H,x[R++]=F+K[3]*H,d[L]=W.atlasIndex}),y.quads=(y.quads||0)+(ei()-A);const M=ei();y.sdf={};const S=u.height,P=Math.ceil(l.glyphCount/o),w=Math.pow(2,Math.ceil(Math.log2(P*s)));w>S&&(console.info(`Increasing SDF texture size ${S}->${w}`),xd(u,n,w),c.dispose()),Promise.all(E.map(I=>vo(I,l,a.gpuAccelerateSDF).then(({timing:L})=>{y.sdf[I.atlasIndex]=L}))).then(()=>{E.length&&!l.contextLost&&(xo(l),c.needsUpdate=!0),y.sdfTotal=ei()-M,y.total=ei()-t,e(Object.freeze({parameters:a,sdfTexture:c,sdfGlyphSize:s,sdfExponent:i,glyphBounds:x,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{l.contextLost||vd(u)})}function vo({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},s){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=wi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(o/r)*r,h=Math.floor(u/(o/r))*r,d=e%4;return hd(r,r,a,t,c,l,n,f,h,d,s)}function Ed(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const r=[];a.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(vo(i,a,!0))})}),Promise.all(r).then(()=>{xo(a),a.sdfTexture.needsUpdate=!0})})}function yd(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let pr;function Td(a){return pr||(pr=typeof document>"u"?{}:document.createElement("a")),pr.href=a,pr.href}function xo(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:r,height:n}=e,i=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==r*n*4)&&(s=new Uint8Array(r*n*4),t.image={width:r,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,s)}}const bd=ci({name:"Typesetter",dependencies:[fd,ud,Zh],init(a,e,t){return a(e,t())}}),So=ci({name:"Typesetter",dependencies:[bd],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}});So.onMainThread;const Vs={};function Ad(a){let e=Vs[a];return e||(e=Vs[a]=new Nn(1,1,a,a).translate(.5,.5,0)),e}const Rd="aTroikaGlyphBounds",Hs="aTroikaGlyphIndex",Cd="aTroikaGlyphColor";class wd extends al{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new si,this.boundingBox=new In}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Ad(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){this.updateAttributeData(Rd,e,4),this.updateAttributeData(Hs,t,1),this.updateAttributeData(Cd,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:s,max:o,sin:l,cos:c}=Math,u=n/2,f=n*2,h=Math.abs(t),d=e[0]/h,g=e[2]/h,_=i((d+u)/f)!==i((g+u)/f)?-h:s(l(d)*h,l(g)*h),m=i((d-u)/f)!==i((g-u)/f)?h:o(l(d)*h,l(g)*h),p=i((d+n)/f)!==i((g+n)/f)?h*2:o(h-c(d)*h,h-c(g)*h);r.min.set(_,e[1],t<0?-p:0),r.max.set(m,e[3],t<0?0:p)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Hs).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Qo(t,r)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const Ud=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Dd=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Pd=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Fd=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Ld(a){const e=Ma(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new et},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ct(0,0,0,0)},uTroikaClipRect:{value:new ct(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new et},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Je},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new qe},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Ud,vertexTransform:Dd,fragmentDefs:Pd,fragmentColorTransform:Fd,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(go,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Ra=new ba({color:16777215,side:2,transparent:!0}),Ws=8421504,Xs=new ft,mr=new te,pa=new te,Ri=[],Id=new te,ma="+x+y";function qs(a){return Array.isArray(a)?a[0]:a}let Mo=()=>{const a=new Ht(new Nn(1,1),Ra);return Mo=()=>a,a},Eo=()=>{const a=new Ht(new Nn(1,1,32,1),Ra);return Eo=()=>a,a};const Nd={type:"syncstart"},Od={type:"synccomplete"},yo=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Bd=yo.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Gd extends Ht{constructor(){const e=new wd;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Ws,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ma,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Nd),Md({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(Od),e&&e()})))}onBeforeRender(e,t,r,n,i,s){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return Ld(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Ra.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.hasOutline()){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return qs(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return qs(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,f=0,h,d,g,_=0,m=0;if(t){let{outlineWidth:y,outlineOffsetX:E,outlineOffsetY:x,outlineBlur:R,outlineOpacity:C}=this;c=this._parsePercent(y)||0,u=Math.max(0,this._parsePercent(R)||0),h=C,_=this._parsePercent(E)||0,m=this._parsePercent(x)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??Ws),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;r.uTroikaEdgeOffset.value=c,r.uTroikaPositionOffset.value.set(_,m),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=f,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=h??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)r.uTroikaClipRect.value.fromArray(p);else{const y=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Je;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let s=this.orientation||ma;if(s!==e._orientation){let o=r.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==ma&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;mr.set(0,0,0)[u]=c==="-"?1:-1,pa.set(0,0,0)[h]=f==="-"?-1:1,Xs.lookAt(Id,mr.cross(pa),pa),o.setFromMatrix4(Xs)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new et){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new et){return mr.copy(e),this.localPositionToTextCoords(this.worldToLocal(mr),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,s=n?Eo():Mo(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let f=i[0]+c.getX(u)*(i[2]-i[0]);const h=i[1]+c.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),l.setXYZ(u,f,h,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Ri.length=0,s.raycast(e,Ri);for(let u=0;u<Ri.length;u++)Ri[u].object=this,t.push(Ri[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Bd.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}yo.forEach(a=>{const e="_private_"+a;Object.defineProperty(Gd.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new In;new Je;export{rn as B,Mn as F,nl as L,ft as M,Jt as P,kd as S,Gd as T,ct as V,Hd as W,il as a,Vd as b,zd as c};
