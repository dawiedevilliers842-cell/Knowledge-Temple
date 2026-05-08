import{a as b,b as ce}from"./chunk-2NFLSA4Y.js";var st=null,Qs=!1,Eu=1,wC=null,Ne=Symbol("SIGNAL");function P(t){let n=st;return st=t,n}function Ks(){return st}var ci={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Pn(t){if(Qs)throw new Error("");if(st===null)return;st.consumerOnSignalRead(t);let n=st.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=st.recomputing;if(i&&(e=n!==void 0?n.nextProducer:st.producers,e!==void 0&&e.producer===t)){st.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===st&&(!i||CC(r,st)))return;let o=Lr(st),a={producer:t,consumer:st,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};st.producersTail=a,n!==void 0?n.nextProducer=a:st.producers=a,o&&gg(t,a)}function mg(){Eu++}function $i(t){if(!(Lr(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Eu)){if(!t.producerMustRecompute(t)&&!Pr(t)){Fr(t);return}t.producerRecomputeValue(t),Fr(t)}}function Iu(t){if(t.consumers===void 0)return;let n=Qs;Qs=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||DC(i)}}finally{Qs=n}}function Mu(){return st?.consumerAllowSignalWrites!==!1}function DC(t){t.dirty=!0,Iu(t),t.consumerMarkedDirty?.(t)}function Fr(t){t.dirty=!1,t.lastCleanEpoch=Eu}function Ln(t){return t&&fg(t),P(t)}function fg(t){t.producersTail=void 0,t.recomputing=!0}function li(t,n){P(n),t&&pg(t)}function pg(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Lr(t))do e=Su(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Pr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||($i(e),i!==e.version))return!0}return!1}function di(t){if(Lr(t)){let n=t.producers;for(;n!==void 0;)n=Su(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function gg(t,n){let e=t.consumersTail,i=Lr(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)gg(r.producer,r)}function Su(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Lr(n)){let o=n.producers;for(;o!==void 0;)o=Su(o)}return e}function Lr(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Xo(t){wC?.(t)}function CC(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Jo(t,n){return Object.is(t,n)}function ea(t,n){let e=Object.create(xC);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if($i(e),Pn(e),e.value===vn)throw e.error;return e.value};return i[Ne]=e,Xo(e),i}var Ui=Symbol("UNSET"),zi=Symbol("COMPUTING"),vn=Symbol("ERRORED"),xC=ce(b({},ci),{value:Ui,dirty:!0,error:null,equal:Jo,kind:"computed",producerMustRecompute(t){return t.value===Ui||t.value===zi},producerRecomputeValue(t){if(t.value===zi)throw new Error("");let n=t.value;t.value=zi;let e=Ln(t),i,r=!1;try{i=t.computation(),P(null),r=n!==Ui&&n!==vn&&i!==vn&&t.equal(n,i)}catch(o){i=vn,t.error=o}finally{li(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function EC(){throw new Error}var _g=EC;function vg(t){_g(t)}function Tu(t){_g=t}var IC=null;function ku(t,n){let e=Object.create(ta);e.value=t,n!==void 0&&(e.equal=n);let i=()=>yg(e);return i[Ne]=e,Xo(e),[i,a=>ui(e,a),a=>Xs(e,a)]}function yg(t){return Pn(t),t.value}function ui(t,n){Mu()||vg(t),t.equal(t.value,n)||(t.value=n,MC(t))}function Xs(t,n){Mu()||vg(t),ui(t,n(t.value))}var ta=ce(b({},ci),{equal:Jo,value:void 0,kind:"signal"});function MC(t){t.version++,mg(),Iu(t),IC?.(t)}var Au=ce(b({},ci),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Ru(t){if(t.dirty=!1,t.version>0&&!Pr(t))return;t.version++;let n=Ln(t);try{t.cleanup(),t.fn()}finally{li(t,n)}}function te(t){return typeof t=="function"}function Vr(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Js=Vr(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Wi(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var oe=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(te(i))try{i()}catch(o){n=o instanceof Js?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{bg(o)}catch(a){n=n??[],a instanceof Js?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Js(n)}}add(n){var e;if(n&&n!==this)if(this.closed)bg(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Wi(e,n)}remove(n){let{_finalizers:e}=this;e&&Wi(e,n),n instanceof t&&n._removeParent(this)}};oe.EMPTY=(()=>{let t=new oe;return t.closed=!0,t})();var Nu=oe.EMPTY;function ec(t){return t instanceof oe||t&&"closed"in t&&te(t.remove)&&te(t.add)&&te(t.unsubscribe)}function bg(t){te(t)?t():t.unsubscribe()}var rn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var jr={setTimeout(t,n,...e){let{delegate:i}=jr;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=jr;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function tc(t){jr.setTimeout(()=>{let{onUnhandledError:n}=rn;if(n)n(t);else throw t})}function na(){}var wg=Ou("C",void 0,void 0);function Dg(t){return Ou("E",void 0,t)}function Cg(t){return Ou("N",t,void 0)}function Ou(t,n,e){return{kind:t,value:n,error:e}}var Gi=null;function Br(t){if(rn.useDeprecatedSynchronousErrorHandling){let n=!Gi;if(n&&(Gi={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Gi;if(Gi=null,e)throw i}}else t()}function xg(t){rn.useDeprecatedSynchronousErrorHandling&&Gi&&(Gi.errorThrown=!0,Gi.error=t)}var qi=class extends oe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,ec(n)&&n.add(this)):this.destination=kC}static create(n,e,i){return new Vn(n,e,i)}next(n){this.isStopped?Pu(Cg(n),this):this._next(n)}error(n){this.isStopped?Pu(Dg(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Pu(wg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},SC=Function.prototype.bind;function Fu(t,n){return SC.call(t,n)}var Lu=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){nc(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){nc(i)}else nc(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){nc(e)}}},Vn=class extends qi{constructor(n,e,i){super();let r;if(te(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&rn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Fu(n.next,o),error:n.error&&Fu(n.error,o),complete:n.complete&&Fu(n.complete,o)}):r=n}this.destination=new Lu(r)}};function nc(t){rn.useDeprecatedSynchronousErrorHandling?xg(t):tc(t)}function TC(t){throw t}function Pu(t,n){let{onStoppedNotification:e}=rn;e&&jr.setTimeout(()=>e(t,n))}var kC={closed:!0,next:na,error:TC,complete:na};var Hr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function kt(t){return t}function Vu(...t){return ju(t)}function ju(t){return t.length===0?kt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var K=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=RC(e)?e:new Vn(e,i,r);return Br(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Eg(i),new i((r,o)=>{let a=new Vn({next:s=>{try{e(s)}catch(c){o(c),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Hr](){return this}pipe(...e){return ju(e)(this)}toPromise(e){return e=Eg(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function Eg(t){var n;return(n=t??rn.Promise)!==null&&n!==void 0?n:Promise}function AC(t){return t&&te(t.next)&&te(t.error)&&te(t.complete)}function RC(t){return t&&t instanceof qi||AC(t)&&ec(t)}function NC(t){return te(t?.lift)}function ae(t){return n=>{if(NC(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function se(t,n,e,i,r){return new Bu(t,n,e,i,r)}var Bu=class extends qi{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(c){n.error(c)}}:super._next,this._error=r?function(s){try{r(s)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Ig=Vr(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var I=(()=>{class t extends K{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new ic(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Ig}next(e){Br(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Br(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Br(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Nu:(this.currentObservers=null,o.push(e),new oe(()=>{this.currentObservers=null,Wi(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new K;return e.source=this,e}}return t.create=(n,e)=>new ic(n,e),t})(),ic=class extends I{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Nu}};var Ue=class extends I{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var ia={now(){return(ia.delegate||Date).now()},delegate:void 0};var rc=class extends I{constructor(n=1/0,e=1/0,i=ia){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let c=1;c<i.length&&i[c]<=a;c+=2)s=c;s&&i.splice(0,s+1)}}};var oc=class extends oe{constructor(n,e){super()}schedule(n,e=0){return this}};var ra={setInterval(t,n,...e){let{delegate:i}=ra;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=ra;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var ac=class extends oc{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return ra.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&ra.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Wi(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Ur=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Ur.now=ia.now;var sc=class extends Ur{constructor(n,e=Ur.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var oa=new sc(ac),Mg=oa;var Pe=new K(t=>t.complete());function cc(t){return t&&te(t.schedule)}function Hu(t){return t[t.length-1]}function lc(t){return te(Hu(t))?t.pop():void 0}function yn(t){return cc(Hu(t))?t.pop():void 0}function Sg(t,n){return typeof Hu(t)=="number"?t.pop():n}function kg(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{l(i.next(d))}catch(h){a(h)}}function c(d){try{l(i.throw(d))}catch(h){a(h)}}function l(d){d.done?o(d.value):r(d.value).then(s,c)}l((i=i.apply(t,n||[])).next())})}function Tg(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Yi(t){return this instanceof Yi?(this.v=t,this):new Yi(t)}function Ag(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(f){return function(p){return Promise.resolve(p).then(f,h)}}function s(f,p){i[f]&&(r[f]=function(D){return new Promise(function(E,S){o.push([f,D,E,S])>1||c(f,D)})},p&&(r[f]=p(r[f])))}function c(f,p){try{l(i[f](p))}catch(D){m(o[0][3],D)}}function l(f){f.value instanceof Yi?Promise.resolve(f.value.v).then(d,h):m(o[0][2],f)}function d(f){c("next",f)}function h(f){c("throw",f)}function m(f,p){f(p),o.shift(),o.length&&c(o[0][0],o[0][1])}}function Rg(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Tg=="function"?Tg(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,c){a=t[o](a),r(s,c,a.done,a.value)})}}function r(o,a,s,c){Promise.resolve(c).then(function(l){o({value:l,done:s})},a)}}var dc=t=>t&&typeof t.length=="number"&&typeof t!="function";function uc(t){return te(t?.then)}function hc(t){return te(t[Hr])}function mc(t){return Symbol.asyncIterator&&te(t?.[Symbol.asyncIterator])}function fc(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function OC(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var pc=OC();function gc(t){return te(t?.[pc])}function _c(t){return Ag(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Yi(e.read());if(r)return yield Yi(void 0);yield yield Yi(i)}}finally{e.releaseLock()}})}function vc(t){return te(t?.getReader)}function xe(t){if(t instanceof K)return t;if(t!=null){if(hc(t))return FC(t);if(dc(t))return PC(t);if(uc(t))return LC(t);if(mc(t))return Ng(t);if(gc(t))return VC(t);if(vc(t))return jC(t)}throw fc(t)}function FC(t){return new K(n=>{let e=t[Hr]();if(te(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function PC(t){return new K(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function LC(t){return new K(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,tc)})}function VC(t){return new K(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Ng(t){return new K(n=>{BC(t,n).catch(e=>n.error(e))})}function jC(t){return Ng(_c(t))}function BC(t,n){var e,i,r,o;return kg(this,void 0,void 0,function*(){try{for(e=Rg(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function xt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function yc(t,n=0){return ae((e,i)=>{e.subscribe(se(i,r=>xt(i,t,()=>i.next(r),n),()=>xt(i,t,()=>i.complete(),n),r=>xt(i,t,()=>i.error(r),n)))})}function bc(t,n=0){return ae((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Og(t,n){return xe(t).pipe(bc(n),yc(n))}function Fg(t,n){return xe(t).pipe(bc(n),yc(n))}function Pg(t,n){return new K(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Lg(t,n){return new K(e=>{let i;return xt(e,n,()=>{i=t[pc](),xt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>te(i?.return)&&i.return()})}function wc(t,n){if(!t)throw new Error("Iterable cannot be null");return new K(e=>{xt(e,n,()=>{let i=t[Symbol.asyncIterator]();xt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Vg(t,n){return wc(_c(t),n)}function jg(t,n){if(t!=null){if(hc(t))return Og(t,n);if(dc(t))return Pg(t,n);if(uc(t))return Fg(t,n);if(mc(t))return wc(t,n);if(gc(t))return Lg(t,n);if(vc(t))return Vg(t,n)}throw fc(t)}function Ae(t,n){return n?jg(t,n):xe(t)}function L(...t){let n=yn(t);return Ae(t,n)}function aa(t,n){let e=te(t)?t:()=>t,i=r=>r.error(e());return new K(n?r=>n.schedule(i,0,r):i)}function sa(t){return!!t&&(t instanceof K||te(t.lift)&&te(t.subscribe))}var Zi=Vr(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Bg(t){return t instanceof Date&&!isNaN(t)}function ne(t,n){return ae((e,i)=>{let r=0;e.subscribe(se(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:HC}=Array;function UC(t,n){return HC(n)?t(...n):t(n)}function Dc(t){return ne(n=>UC(t,n))}var{isArray:zC}=Array,{getPrototypeOf:$C,prototype:WC,keys:GC}=Object;function Cc(t){if(t.length===1){let n=t[0];if(zC(n))return{args:n,keys:null};if(qC(n)){let e=GC(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function qC(t){return t&&typeof t=="object"&&$C(t)===WC}function xc(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function ca(...t){let n=yn(t),e=lc(t),{args:i,keys:r}=Cc(t);if(i.length===0)return Ae([],n);let o=new K(YC(i,n,r?a=>xc(r,a):kt));return e?o.pipe(Dc(e)):o}function YC(t,n,e=kt){return i=>{Hg(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let c=0;c<r;c++)Hg(n,()=>{let l=Ae(t[c],n),d=!1;l.subscribe(se(i,h=>{o[c]=h,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function Hg(t,n,e){t?xt(e,t,n):n()}function Ug(t,n,e,i,r,o,a,s){let c=[],l=0,d=0,h=!1,m=()=>{h&&!c.length&&!l&&n.complete()},f=D=>l<i?p(D):c.push(D),p=D=>{o&&n.next(D),l++;let E=!1;xe(e(D,d++)).subscribe(se(n,S=>{r?.(S),o?f(S):n.next(S)},()=>{E=!0},void 0,()=>{if(E)try{for(l--;c.length&&l<i;){let S=c.shift();a?xt(n,a,()=>p(S)):p(S)}m()}catch(S){n.error(S)}}))};return t.subscribe(se(n,f,()=>{h=!0,m()})),()=>{s?.()}}function ct(t,n,e=1/0){return te(n)?ct((i,r)=>ne((o,a)=>n(i,o,r,a))(xe(t(i,r))),e):(typeof n=="number"&&(e=n),ae((i,r)=>Ug(i,r,t,e)))}function hi(t=1/0){return ct(kt,t)}function zg(){return hi(1)}function mi(...t){return zg()(Ae(t,yn(t)))}function la(t){return new K(n=>{xe(t()).subscribe(n)})}function Uu(...t){let n=lc(t),{args:e,keys:i}=Cc(t),r=new K(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),c=a,l=a;for(let d=0;d<a;d++){let h=!1;xe(e[d]).subscribe(se(o,m=>{h||(h=!0,l--),s[d]=m},()=>c--,void 0,()=>{(!c||!h)&&(l||o.next(i?xc(i,s):s),o.complete())}))}});return n?r.pipe(Dc(n)):r}function $g(t=0,n,e=Mg){let i=-1;return n!=null&&(cc(n)?e=n:i=n),new K(r=>{let o=Bg(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function bn(...t){let n=yn(t),e=Sg(t,1/0),i=t;return i.length?i.length===1?xe(i[0]):hi(e)(Ae(i,n)):Pe}function ue(t,n){return ae((e,i)=>{let r=0;e.subscribe(se(i,o=>t.call(n,o,r++)&&i.next(o)))})}function Wg(t){return ae((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}a&&e.complete()},c=()=>{o=null,a&&e.complete()};n.subscribe(se(e,l=>{i=!0,r=l,o||xe(t(l)).subscribe(o=se(e,s,c))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function Ec(t,n=oa){return Wg(()=>$g(t,n))}function fi(t){return ae((n,e)=>{let i=null,r=!1,o;i=n.subscribe(se(e,void 0,void 0,a=>{o=xe(t(a,fi(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Qi(t,n){return te(n)?ct(t,n,1):ct(t,1)}function Ki(t,n=oa){return ae((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=a+t,d=n.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}s()}e.subscribe(se(i,l=>{o=l,a=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function Gg(t){return ae((n,e)=>{let i=!1;n.subscribe(se(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function lt(t){return t<=0?()=>Pe:ae((n,e)=>{let i=0;n.subscribe(se(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Ic(t,n=kt){return t=t??ZC,ae((e,i)=>{let r,o=!0;e.subscribe(se(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function ZC(t,n){return t===n}function qg(t=QC){return ae((n,e)=>{let i=!1;n.subscribe(se(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function QC(){return new Zi}function Xi(t){return ae((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function jn(t,n){let e=arguments.length>=2;return i=>i.pipe(t?ue((r,o)=>t(r,o,i)):kt,lt(1),e?Gg(n):qg(()=>new Zi))}function Mc(t){return t<=0?()=>Pe:ae((n,e)=>{let i=[];n.subscribe(se(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Sc(){return ae((t,n)=>{let e,i=!1;t.subscribe(se(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function da(t={}){let{connector:n=()=>new I,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,c,l=0,d=!1,h=!1,m=()=>{s?.unsubscribe(),s=void 0},f=()=>{m(),a=c=void 0,d=h=!1},p=()=>{let D=a;f(),D?.unsubscribe()};return ae((D,E)=>{l++,!h&&!d&&m();let S=c=c??n();E.add(()=>{l--,l===0&&!h&&!d&&(s=zu(p,r))}),S.subscribe(E),!a&&l>0&&(a=new Vn({next:fe=>S.next(fe),error:fe=>{h=!0,m(),s=zu(f,e,fe),S.error(fe)},complete:()=>{d=!0,m(),s=zu(f,i),S.complete()}}),xe(D).subscribe(a))})(o)}}function zu(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Vn({next:()=>{i.unsubscribe(),t()}});return xe(n(...e)).subscribe(i)}function Tc(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,da({connector:()=>new rc(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function ua(t){return ue((n,e)=>t<=e)}function pt(...t){let n=yn(t);return ae((e,i)=>{(n?mi(t,e,n):mi(t,e)).subscribe(i)})}function Et(t,n){return ae((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(se(i,c=>{r?.unsubscribe();let l=0,d=o++;xe(t(c,d)).subscribe(r=se(i,h=>i.next(n?n(c,h,d,l++):h),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Oe(t){return ae((n,e)=>{xe(t).subscribe(se(e,()=>e.complete(),na)),!e.closed&&n.subscribe(e)})}function Ze(t,n,e){let i=te(t)||n||e?{next:t,error:n,complete:e}:t;return i?ae((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(se(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;s=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;s=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;s&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):kt}var $u;function kc(){return $u}function wn(t){let n=$u;return $u=t,n}var Yg=Symbol("NotFound");function zr(t){return t===Yg||t?.name==="\u0275NotFound"}function Wu(t,n,e){let i=Object.create(KC);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if($i(i),Pn(i),i.value===vn)throw i.error;return i.value};return o[Ne]=i,Xo(i),o}function Zg(t,n){$i(t),ui(t,n),Fr(t)}function Qg(t,n){if($i(t),t.value===vn)throw t.error;Xs(t,n),Fr(t)}var KC=ce(b({},ci),{value:Ui,dirty:!0,error:null,equal:Jo,kind:"linkedSignal",producerMustRecompute(t){return t.value===Ui||t.value===zi},producerRecomputeValue(t){if(t.value===zi)throw new Error("");let n=t.value;t.value=zi;let e=Ln(t),i,r=!1;try{let o=t.source(),a=n!==Ui&&n!==vn,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,P(null),r=a&&i!==vn&&t.equal(n,i)}catch(o){i=vn,t.error=o}finally{li(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function Kg(t){let n=P(null);try{return t()}finally{P(n)}}var Lc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",C=class extends Error{code;constructor(n,e){super(Cn(n,e)),this.code=n}};function XC(t){return`NG0${Math.abs(t)}`}function Cn(t,n){return`${XC(t)}${n?": "+n:""}`}var _i=globalThis;function _e(t){for(let n in t)if(t[n]===_e)return n;throw Error("")}function n_(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function va(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(va).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Vc(t,n){return t?n?`${t} ${n}`:t:n||""}var JC=_e({__forward_ref__:_e});function vi(t){return t.__forward_ref__=vi,t}function ze(t){return rh(t)?t():t}function rh(t){return typeof t=="function"&&t.hasOwnProperty(JC)&&t.__forward_ref__===vi}function g(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function $(t){return{providers:t.providers||[],imports:t.imports||[]}}function ya(t){return ex(t,jc)}function oh(t){return ya(t)!==null}function ex(t,n){return t.hasOwnProperty(n)&&t[n]||null}function tx(t){let n=t?.[jc]??null;return n||null}function qu(t){return t&&t.hasOwnProperty(Rc)?t[Rc]:null}var jc=_e({\u0275prov:_e}),Rc=_e({\u0275inj:_e}),_=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=g({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function ah(t){return t&&!!t.\u0275providers}var sh=_e({\u0275cmp:_e}),ch=_e({\u0275dir:_e}),lh=_e({\u0275pipe:_e}),dh=_e({\u0275mod:_e}),ma=_e({\u0275fac:_e}),rr=_e({__NG_ELEMENT_ID__:_e}),Xg=_e({__NG_ENV_ID__:_e});function uh(t){return Hc(t,"@NgModule"),t[dh]||null}function Hn(t){return Hc(t,"@Component"),t[sh]||null}function Bc(t){return Hc(t,"@Directive"),t[ch]||null}function i_(t){return Hc(t,"@Pipe"),t[lh]||null}function Hc(t,n){if(t==null)throw new C(-919,!1)}function or(t){return typeof t=="string"?t:t==null?"":String(t)}var r_=_e({ngErrorCode:_e}),nx=_e({ngErrorMessage:_e}),ix=_e({ngTokenPath:_e});function hh(t,n){return o_("",-200,n)}function Uc(t,n){throw new C(-201,!1)}function o_(t,n,e){let i=new C(n,t);return i[r_]=n,i[nx]=t,e&&(i[ix]=e),i}function rx(t){return t[r_]}var Yu;function a_(){return Yu}function At(t){let n=Yu;return Yu=t,n}function mh(t,n,e){let i=ya(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Uc(t,"")}var ox={},Ji=ox,ax="__NG_DI_FLAG__",Zu=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=er(e)||0;try{return this.injector.get(n,i&8?null:Ji,i)}catch(r){if(zr(r))return r;throw r}}};function sx(t,n=0){let e=kc();if(e===void 0)throw new C(-203,!1);if(e===null)return mh(t,void 0,n);{let i=cx(n),r=e.retrieve(t,i);if(zr(r)){if(i.optional)return null;throw r}return r}}function N(t,n=0){return(a_()||sx)(ze(t),n)}function u(t,n){return N(t,er(n))}function er(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function cx(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Qu(t){let n=[];for(let e=0;e<t.length;e++){let i=ze(t[e]);if(Array.isArray(i)){if(i.length===0)throw new C(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],c=lx(s);typeof c=="number"?c===-1?r=s.token:o|=c:r=s}n.push(N(r,o))}else n.push(N(i))}return n}function lx(t){return t[ax]}function tr(t,n){let e=t.hasOwnProperty(ma);return e?t[ma]:null}function s_(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function c_(t){return t.flat(Number.POSITIVE_INFINITY)}function zc(t,n){t.forEach(e=>Array.isArray(e)?zc(e,n):n(e))}function fh(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function ba(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function l_(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function d_(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function $c(t,n,e){let i=Wr(t,n);return i>=0?t[i|1]=e:(i=~i,d_(t,i,n,e)),i}function Wc(t,n){let e=Wr(t,n);if(e>=0)return t[e|1]}function Wr(t,n){return dx(t,n,1)}function dx(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var on={},dt=[],yi=new _(""),ph=new _("",-1),gh=new _(""),fa=class{get(n,e=Ji){if(e===Ji){let r=o_("",-201);throw r.name="\u0275NotFound",r}return e}};function Rt(t){return{\u0275providers:t}}function u_(t){return Rt([{provide:yi,multi:!0,useValue:t}])}function h_(...t){return{\u0275providers:_h(!0,t),\u0275fromNgModule:!0}}function _h(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return zc(n,a=>{let s=a;Nc(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&m_(r,o),e}function m_(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];vh(r,o=>{n(o,i)})}}function Nc(t,n,e,i){if(t=ze(t),!t)return!1;let r=null,o=qu(t),a=!o&&Hn(t);if(!o&&!a){let c=t.ngModule;if(o=qu(c),o)r=c;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let c=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let l of c)Nc(l,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let l;zc(o.imports,d=>{Nc(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&m_(l,n)}if(!s){let l=tr(r)||(()=>new r);n({provide:r,useFactory:l,deps:dt},r),n({provide:gh,useValue:r,multi:!0},r),n({provide:yi,useValue:()=>N(r),multi:!0},r)}let c=o.providers;if(c!=null&&!s){let l=t;vh(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function vh(t,n){for(let e of t)ah(e)&&(e=e.\u0275providers),Array.isArray(e)?vh(e,n):n(e)}var ux=_e({provide:String,useValue:_e});function f_(t){return t!==null&&typeof t=="object"&&ux in t}function hx(t){return!!(t&&t.useExisting)}function mx(t){return!!(t&&t.useFactory)}function nr(t){return typeof t=="function"}function p_(t){return!!t.useClass}var wa=new _(""),Ac={},Jg={},Gu;function Gr(){return Gu===void 0&&(Gu=new fa),Gu}var we=class{},ir=class extends we{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Xu(n,a=>this.processProvider(a)),this.records.set(ph,$r(void 0,this)),r.has("environment")&&this.records.set(we,$r(void 0,this));let o=this.records.get(wa);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(gh,dt,{self:!0}))}retrieve(n,e){let i=er(e)||0;try{return this.get(n,Ji,i)}catch(r){if(zr(r))return r;throw r}}destroy(){ha(this),this._destroyed=!0;let n=P(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),P(n)}}onDestroy(n){return ha(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){ha(this);let e=wn(this),i=At(void 0),r;try{return n()}finally{wn(e),At(i)}}get(n,e=Ji,i){if(ha(this),n.hasOwnProperty(Xg))return n[Xg](this);let r=er(i),o,a=wn(this),s=At(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=vx(n)&&ya(n);d&&this.injectableDefInScope(d)?l=$r(Ku(n),Ac):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?Gr():this.parent;return e=r&8&&e===Ji?null:e,c.get(n,e)}catch(c){let l=rx(c);throw l===-200||l===-201?new C(l,null):c}finally{At(s),wn(a)}}resolveInjectorInitializers(){let n=P(null),e=wn(this),i=At(void 0),r;try{let o=this.get(yi,dt,{self:!0});for(let a of o)a()}finally{wn(e),At(i),P(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=ze(n);let e=nr(n)?n:ze(n&&n.provide),i=px(n);if(!nr(n)&&n.multi===!0){let r=this.records.get(e);r||(r=$r(void 0,Ac,!0),r.factory=()=>Qu(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=P(null);try{if(e.value===Jg)throw hh("");return e.value===Ac&&(e.value=Jg,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&_x(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{P(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=ze(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Ku(t){let n=ya(t),e=n!==null?n.factory:tr(t);if(e!==null)return e;if(t instanceof _)throw new C(-204,!1);if(t instanceof Function)return fx(t);throw new C(-204,!1)}function fx(t){if(t.length>0)throw new C(-204,!1);let e=tx(t);return e!==null?()=>e.factory(t):()=>new t}function px(t){if(f_(t))return $r(void 0,t.useValue);{let n=yh(t);return $r(n,Ac)}}function yh(t,n,e){let i;if(nr(t)){let r=ze(t);return tr(r)||Ku(r)}else if(f_(t))i=()=>ze(t.useValue);else if(mx(t))i=()=>t.useFactory(...Qu(t.deps||[]));else if(hx(t))i=(r,o)=>N(ze(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=ze(t&&(t.useClass||t.provide));if(gx(t))i=()=>new r(...Qu(t.deps));else return tr(r)||Ku(r)}return i}function ha(t){if(t.destroyed)throw new C(-205,!1)}function $r(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function gx(t){return!!t.deps}function _x(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function vx(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Xu(t,n){for(let e of t)Array.isArray(e)?Xu(e,n):e&&ah(e)?Xu(e.\u0275providers,n):n(e)}function Qe(t,n){let e;t instanceof ir?(ha(t),e=t):e=new Zu(t);let i,r=wn(e),o=At(void 0);try{return n()}finally{wn(r),At(o)}}function g_(){return a_()!==void 0||kc()!=null}var an=0,W=1,Y=2,$e=3,Ht=4,gt=5,ar=6,qr=7,Le=8,Un=9,sn=10,Ee=11,Yr=12,bh=13,sr=14,_t=15,bi=16,cr=17,xn=18,zn=19,wh=20,Bn=21,Gc=22,pi=23,Nt=24,lr=25,wi=26,Ve=27,__=1,Dh=6,Di=7,Da=8,dr=9,Fe=10;function $n(t){return Array.isArray(t)&&typeof t[__]=="object"}function cn(t){return Array.isArray(t)&&t[__]===!0}function Ch(t){return(t.flags&4)!==0}function Wn(t){return t.componentOffset>-1}function Ca(t){return(t.flags&1)===1}function ln(t){return!!t.template}function Zr(t){return(t[Y]&512)!==0}function ur(t){return(t[Y]&256)===256}var xh="svg",v_="math";function Ut(t){for(;Array.isArray(t);)t=t[an];return t}function Eh(t,n){return Ut(n[t])}function dn(t,n){return Ut(n[t.index])}function qc(t,n){return t.data[n]}function y_(t,n){return t[n]}function zt(t,n){let e=n[t];return $n(e)?e:e[an]}function b_(t){return(t[Y]&4)===4}function Yc(t){return(t[Y]&128)===128}function w_(t){return cn(t[$e])}function $t(t,n){return n==null?null:t[n]}function Ih(t){t[cr]=0}function Mh(t){t[Y]&1024||(t[Y]|=1024,Yc(t)&&hr(t))}function D_(t,n){for(;t>0;)n=n[sr],t--;return n}function xa(t){return!!(t[Y]&9216||t[Nt]?.dirty)}function Zc(t){t[sn].changeDetectionScheduler?.notify(8),t[Y]&64&&(t[Y]|=1024),xa(t)&&hr(t)}function hr(t){t[sn].changeDetectionScheduler?.notify(0);let n=gi(t);for(;n!==null&&!(n[Y]&8192||(n[Y]|=8192,!Yc(n)));)n=gi(n)}function Sh(t,n){if(ur(t))throw new C(911,!1);t[Bn]===null&&(t[Bn]=[]),t[Bn].push(n)}function C_(t,n){if(t[Bn]===null)return;let e=t[Bn].indexOf(n);e!==-1&&t[Bn].splice(e,1)}function gi(t){let n=t[$e];return cn(n)?n[$e]:n}function Th(t){return t[qr]??=[]}function kh(t){return t.cleanup??=[]}function x_(t,n,e,i){let r=Th(n);r.push(e),t.firstCreatePass&&kh(t).push(i,r.length-1)}var ie={lFrame:L_(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Ju=!1;function E_(){return ie.lFrame.elementDepthCount}function I_(){ie.lFrame.elementDepthCount++}function Ah(){ie.lFrame.elementDepthCount--}function Rh(){return ie.bindingsEnabled}function Nh(){return ie.skipHydrationRootTNode!==null}function Oh(t){return ie.skipHydrationRootTNode===t}function Fh(){ie.skipHydrationRootTNode=null}function Z(){return ie.lFrame.lView}function Re(){return ie.lFrame.tView}function vt(t){return ie.lFrame.contextLView=t,t[Le]}function yt(t){return ie.lFrame.contextLView=null,t}function Ke(){let t=Ph();for(;t!==null&&t.type===64;)t=t.parent;return t}function Ph(){return ie.lFrame.currentTNode}function M_(){let t=ie.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Qr(t,n){let e=ie.lFrame;e.currentTNode=t,e.isParent=n}function Lh(){return ie.lFrame.isParent}function Vh(){ie.lFrame.isParent=!1}function S_(){return ie.lFrame.contextLView}function jh(){return Ju}function pa(t){let n=Ju;return Ju=t,n}function T_(){let t=ie.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function k_(){return ie.lFrame.bindingIndex}function A_(t){return ie.lFrame.bindingIndex=t}function Gn(){return ie.lFrame.bindingIndex++}function Qc(t){let n=ie.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function R_(){return ie.lFrame.inI18n}function N_(t,n){let e=ie.lFrame;e.bindingIndex=e.bindingRootIndex=t,Kc(n)}function O_(){return ie.lFrame.currentDirectiveIndex}function Kc(t){ie.lFrame.currentDirectiveIndex=t}function F_(t){let n=ie.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Xc(){return ie.lFrame.currentQueryIndex}function Ea(t){ie.lFrame.currentQueryIndex=t}function yx(t){let n=t[W];return n.type===2?n.declTNode:n.type===1?t[gt]:null}function Bh(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=yx(o),r===null||(o=o[sr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ie.lFrame=P_();return i.currentTNode=n,i.lView=t,!0}function Jc(t){let n=P_(),e=t[W];ie.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function P_(){let t=ie.lFrame,n=t===null?null:t.child;return n===null?L_(t):n}function L_(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function V_(){let t=ie.lFrame;return ie.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Hh=V_;function el(){let t=V_();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function j_(t){return(ie.lFrame.contextLView=D_(t,ie.lFrame.contextLView))[Le]}function En(){return ie.lFrame.selectedIndex}function Ci(t){ie.lFrame.selectedIndex=t}function Ia(){let t=ie.lFrame;return qc(t.tView,t.selectedIndex)}function bt(){ie.lFrame.currentNamespace=xh}function xi(){bx()}function bx(){ie.lFrame.currentNamespace=null}function B_(){return ie.lFrame.currentNamespace}var H_=!0;function tl(){return H_}function nl(t){H_=t}function eh(t,n=null,e=null,i){let r=Uh(t,n,e,i);return r.resolveInjectorInitializers(),r}function Uh(t,n=null,e=null,i,r=new Set){let o=[e||dt,h_(t)],a;return new ir(o,n||Gr(),a||null,r)}var re=class t{static THROW_IF_NOT_FOUND=Ji;static NULL=new fa;static create(n,e){if(Array.isArray(n))return eh({name:""},e,n,"");{let i=n.name??"";return eh({name:i},n.parent,n.providers,i)}}static \u0275prov=g({token:t,providedIn:"any",factory:()=>N(ph)});static __NG_ELEMENT_ID__=-1},V=new _(""),tt=(()=>{class t{static __NG_ELEMENT_ID__=wx;static __NG_ENV_ID__=e=>e}return t})(),Oc=class extends tt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return ur(this._lView)}onDestroy(n){let e=this._lView;return Sh(e,n),()=>C_(e,n)}};function wx(){return new Oc(Z())}var U_=!1,z_=new _(""),qn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Ue(!1);debugTaskTracker=u(z_,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new K(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=g({token:t,providedIn:"root",factory:()=>new t})}return t})(),th=class extends I{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,g_()&&(this.destroyRef=u(tt,{optional:!0})??void 0,this.pendingTasks=u(qn,{optional:!0})??void 0)}emit(n){let e=P(null);try{super.next(n)}finally{P(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),a=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof oe&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},R=th;function Fc(...t){}function zh(t){let n,e;function i(){t=Fc;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function $_(t){return queueMicrotask(()=>t()),()=>{t=Fc}}var $h="isAngularZone",ga=$h+"_ID",Dx=0,O=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new R(!1);onMicrotaskEmpty=new R(!1);onStable=new R(!1);onError=new R(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=U_}=n;if(typeof Zone>"u")throw new C(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,Ex(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get($h)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new C(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new C(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,Cx,Fc,Fc);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},Cx={};function Wh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function xx(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){zh(()=>{t.callbackScheduled=!1,nh(t),t.isCheckStableRunning=!0,Wh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),nh(t)}function Ex(t){let n=()=>{xx(t)},e=Dx++;t._inner=t._inner.fork({name:"angular",properties:{[$h]:!0,[ga]:e,[ga+e]:!0},onInvokeTask:(i,r,o,a,s,c)=>{if(Ix(c))return i.invokeTask(o,a,s,c);try{return e_(t),i.invokeTask(o,a,s,c)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),t_(t)}},onInvoke:(i,r,o,a,s,c,l)=>{try{return e_(t),i.invoke(o,a,s,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!Mx(c)&&n(),t_(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,nh(t),Wh(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function nh(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function e_(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function t_(t){t._nesting--,Wh(t)}var _a=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new R;onMicrotaskEmpty=new R;onStable=new R;onError=new R;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function Ix(t){return W_(t,"__ignore_ng_zone__")}function Mx(t){return W_(t,"__scheduler_tick__")}function W_(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var ut=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Ot=new _("",{factory:()=>{let t=u(O),n=u(we),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(ut),e.handleError(i))})}}}),G_={provide:yi,useValue:()=>{let t=u(ut,{optional:!0})},multi:!0},Sx=new _("",{factory:()=>{let t=u(V).defaultView;if(!t)return;let n=u(Ot),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(tt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Gh(){return Rt([u_(()=>{u(Sx)})])}function M(t,n){let[e,i,r]=ku(t,n?.equal),o=e,a=o[Ne];return o.set=i,o.update=r,o.asReadonly=Ma.bind(o),o}function Ma(){let t=this[Ne];if(t.readonlyFn===void 0){let n=()=>this();n[Ne]=t,t.readonlyFn=n}return t.readonlyFn}var Kr=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=Tx}return t})();function Tx(){return new Kr(Z(),Ke())}var Dn=class{},Sa=new _("",{factory:()=>!0});var qh=new _(""),Ta=(()=>{class t{internalPendingTasks=u(qn);scheduler=u(Dn);errorHandler=u(Ot);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=g({token:t,providedIn:"root",factory:()=>new t})}return t})(),il=(()=>{class t{static \u0275prov=g({token:t,providedIn:"root",factory:()=>new ih})}return t})(),ih=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Pc=class{[Ne];constructor(n){this[Ne]=n}destroy(){this[Ne].destroy()}};function Yn(t,n){let e=n?.injector??u(re),i=n?.manualCleanup!==!0?e.get(tt):null,r,o=e.get(Kr,null,{optional:!0}),a=e.get(Dn);return o!==null?(r=Rx(o.view,a,t),i instanceof Oc&&i._lView===o.view&&(i=null)):r=Nx(t,e.get(il),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Pc(r)}var q_=ce(b({},Au),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=pa(!1);try{Ru(this)}finally{pa(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=P(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],P(t)}}}),kx=ce(b({},q_),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(di(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),Ax=ce(b({},q_),{consumerMarkedDirty(){this.view[Y]|=8192,hr(this.view),this.notifier.notify(13)},destroy(){if(di(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[pi]?.delete(this)}});function Rx(t,n,e){let i=Object.create(Ax);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=Y_(i,e),t[pi]??=new Set,t[pi].add(i),i.consumerMarkedDirty(i),i}function Nx(t,n,e){let i=Object.create(kx);return i.fn=Y_(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function Y_(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function ja(t){return{toString:t}.toString()}function Bx(t){return typeof t=="function"}function kv(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var ml=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Se=(()=>{let t=()=>Av;return t.ngInherit=!0,t})();function Av(t){return t.type.prototype.ngOnChanges&&(t.setInput=Ux),Hx}function Hx(){let t=Nv(this),n=t?.current;if(n){let e=t.previous;if(e===on)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function Ux(t,n,e,i,r){let o=this.declaredInputs[i],a=Nv(t)||zx(t,{previous:on,current:null}),s=a.current||(a.current={}),c=a.previous,l=c[o];s[o]=new ml(l&&l.currentValue,e,c===on),kv(t,n,r,e)}var Rv="__ngSimpleChanges__";function Nv(t){return t[Rv]||null}function zx(t,n){return t[Rv]=n}var Z_=[];var ve=function(t,n=null,e){for(let i=0;i<Z_.length;i++){let r=Z_[i];r(t,n,e)}},de=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(de||{});function $x(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=Av(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Ov(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function cl(t,n,e){Fv(t,n,3,e)}function ll(t,n,e,i){(t[Y]&3)===e&&Fv(t,n,e,i)}function Yh(t,n){let e=t[Y];(e&3)===n&&(e&=16383,e+=1,t[Y]=e)}function Fv(t,n,e,i){let r=i!==void 0?t[cr]&65535:0,o=i??-1,a=n.length-1,s=0;for(let c=r;c<a;c++)if(typeof n[c+1]=="number"){if(s=n[c],i!=null&&s>=i)break}else n[c]<0&&(t[cr]+=65536),(s<o||o==-1)&&(Wx(t,e,n,c),t[cr]=(t[cr]&4294901760)+c+2),c++}function Q_(t,n){ve(de.LifecycleHookStart,t,n);let e=P(null);try{n.call(t)}finally{P(e),ve(de.LifecycleHookEnd,t,n)}}function Wx(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[Y]>>14<t[cr]>>16&&(t[Y]&3)===n&&(t[Y]+=16384,Q_(s,o)):Q_(s,o)}var Jr=-1,fr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function Gx(t){return(t.flags&8)!==0}function qx(t){return(t.flags&16)!==0}function Yx(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];Zx(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function Pv(t){return t===3||t===4||t===6}function Zx(t){return t.charCodeAt(0)===64}function eo(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?K_(t,e,r,null,n[++i]):K_(t,e,r,null,null))}}return t}function K_(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function Lv(t){return t!==Jr}function fl(t){return t&32767}function Qx(t){return t>>16}function pl(t,n){let e=Qx(t),i=n;for(;e>0;)i=i[sr],e--;return i}var rm=!0;function X_(t){let n=rm;return rm=t,n}var Kx=256,Vv=Kx-1,jv=5,Xx=0,In={};function Jx(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(rr)&&(i=e[rr]),i==null&&(i=e[rr]=Xx++);let r=i&Vv,o=1<<r;n.data[t+(r>>jv)]|=o}function gl(t,n){let e=Bv(t,n);if(e!==-1)return e;let i=n[W];i.firstCreatePass&&(t.injectorIndex=n.length,Zh(i.data,t),Zh(n,null),Zh(i.blueprint,null));let r=Um(t,n),o=t.injectorIndex;if(Lv(r)){let a=fl(r),s=pl(r,n),c=s[W].data;for(let l=0;l<8;l++)n[o+l]=s[a+l]|c[a+l]}return n[o+8]=r,o}function Zh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Bv(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Um(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=Wv(r),i===null)return Jr;if(e++,r=r[sr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Jr}function om(t,n,e){Jx(t,n,e)}function eE(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(Pv(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function Hv(t,n,e){if(e&8||t!==void 0)return t;Uc(n,"NodeInjector")}function Uv(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Un],o=At(void 0);try{return r?r.get(n,i,e&8):mh(n,i,e&8)}finally{At(o)}}return Hv(i,n,e)}function zv(t,n,e,i=0,r){if(t!==null){if(n[Y]&2048&&!(i&2)){let a=rE(t,n,e,i,In);if(a!==In)return a}let o=$v(t,n,e,i,In);if(o!==In)return o}return Uv(n,e,i,r)}function $v(t,n,e,i,r){let o=nE(e);if(typeof o=="function"){if(!Bh(n,t,i))return i&1?Hv(r,e,i):Uv(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))Uc(e);else return a}finally{Hh()}}else if(typeof o=="number"){let a=null,s=Bv(t,n),c=Jr,l=i&1?n[_t][gt]:null;for((s===-1||i&4)&&(c=s===-1?Um(t,n):n[s+8],c===Jr||!ev(i,!1)?s=-1:(a=n[W],s=fl(c),n=pl(c,n)));s!==-1;){let d=n[W];if(J_(o,s,d.data)){let h=tE(s,n,e,a,i,l);if(h!==In)return h}c=n[s+8],c!==Jr&&ev(i,n[W].data[s+8]===l)&&J_(o,s,n)?(a=d,s=fl(c),n=pl(c,n)):s=-1}}return r}function tE(t,n,e,i,r,o){let a=n[W],s=a.data[t+8],c=i==null?Wn(s)&&rm:i!=a&&(s.type&3)!==0,l=r&1&&o===s,d=dl(s,a,e,c,l);return d!==null?Ra(n,a,d,s,r):In}function dl(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,h=i?s:s+d,m=r?s+d:l;for(let f=h;f<m;f++){let p=a[f];if(f<c&&e===p||f>=c&&p.type===e)return f}if(r){let f=a[c];if(f&&ln(f)&&f.type===e)return c}return null}function Ra(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof fr){let s=o;if(s.resolving)throw hh("");let c=X_(s.canSeeViewProviders);s.resolving=!0;let l=a[e].type||a[e],d,h=s.injectImpl?At(s.injectImpl):null,m=Bh(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&$x(e,a[e],n)}finally{h!==null&&At(h),X_(c),s.resolving=!1,Hh()}}return o}function nE(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(rr)?t[rr]:void 0;return typeof n=="number"?n>=0?n&Vv:iE:n}function J_(t,n,e){let i=1<<t;return!!(e[n+(t>>jv)]&i)}function ev(t,n){return!(t&2)&&!(t&1&&n)}var mr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return zv(this._tNode,this._lView,n,er(i),e)}};function iE(){return new mr(Ke(),Z())}function nt(t){return ja(()=>{let n=t.prototype.constructor,e=n[ma]||am(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[ma]||am(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function am(t){return rh(t)?()=>{let n=am(ze(t));return n&&n()}:tr(t)}function rE(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[Y]&2048&&!Zr(a);){let s=$v(o,a,e,i|2,In);if(s!==In)return s;let c=o.parent;if(!c){let l=a[wh];if(l){let d=l.get(e,In,i&-5);if(d!==In)return d}c=Wv(a),a=a[sr]}o=c}return r}function Wv(t){let n=t[W],e=n.type;return e===2?n.declTNode:e===1?t[gt]:null}function Ba(t){return eE(Ke(),t)}function oE(){return ro(Ke(),Z())}function ro(t,n){return new j(dn(t,n))}var j=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=oE}return t})();function Gv(t){return t instanceof j?t.nativeElement:t}function aE(){return this._results[Symbol.iterator]()}var Mn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new I}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=c_(n);(this._changesDetected=!s_(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=aE};function qv(t){return(t.flags&128)===128}var zm=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(zm||{}),Yv=new Map,sE=0;function cE(){return sE++}function lE(t){Yv.set(t[zn],t)}function sm(t){Yv.delete(t[zn])}var tv="__ngContext__";function to(t,n){$n(n)?(t[tv]=n[zn],lE(n)):t[tv]=n}function Zv(t){return Kv(t[Yr])}function Qv(t){return Kv(t[Ht])}function Kv(t){for(;t!==null&&!cn(t);)t=t[Ht];return t}var dE;function $m(t){dE=t}var Ii=new _("",{factory:()=>uE}),uE="ng";var Tl=new _(""),Qn=new _("",{providedIn:"platform",factory:()=>"unknown"}),Ha=new _(""),oo=new _("",{factory:()=>u(V).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Xv="r";var Jv="di";var ey=!1,ty=new _("",{factory:()=>ey});var hE=(t,n,e,i)=>{};function mE(t,n,e,i){hE(t,n,e,i)}function kl(t){return(t.flags&32)===32}var fE=()=>null;function ny(t,n,e=!1){return fE(t,n,e)}function iy(t,n){let e=t.contentQueries;if(e!==null){let i=P(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];Ea(o),s.contentQueries(2,n[a],a)}}}finally{P(i)}}}function cm(t,n,e){Ea(0);let i=P(null);try{n(t,e)}finally{P(i)}}function ry(t,n,e){if(Ch(n)){let i=P(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let c=e[a];s.contentQueries(1,c,a)}}}finally{P(i)}}}var mn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(mn||{});var rl;function pE(){if(rl===void 0&&(rl=null,_i.trustedTypes))try{rl=_i.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return rl}function Al(t){return pE()?.createHTML(t)||t}var ol;function gE(){if(ol===void 0&&(ol=null,_i.trustedTypes))try{ol=_i.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return ol}function nv(t){return gE()?.createScriptURL(t)||t}var Zn=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Lc})`}},lm=class extends Zn{getTypeName(){return"HTML"}},dm=class extends Zn{getTypeName(){return"Style"}},um=class extends Zn{getTypeName(){return"Script"}},hm=class extends Zn{getTypeName(){return"URL"}},mm=class extends Zn{getTypeName(){return"ResourceURL"}};function fn(t){return t instanceof Zn?t.changingThisBreaksApplicationSecurity:t}function Kn(t,n){let e=oy(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Lc})`)}return e===n}function oy(t){return t instanceof Zn&&t.getTypeName()||null}function Wm(t){return new lm(t)}function Gm(t){return new dm(t)}function qm(t){return new um(t)}function Ym(t){return new hm(t)}function Zm(t){return new mm(t)}function _E(t){let n=new pm(t);return vE()?new fm(n):n}var fm=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Al(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},pm=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Al(n),e}};function vE(){try{return!!new window.DOMParser().parseFromString(Al(""),"text/html")}catch{return!1}}var yE=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Ua(t){return t=String(t),t.match(yE)?t:"unsafe:"+t}function Xn(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function za(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var ay=Xn("area,br,col,hr,img,wbr"),sy=Xn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),cy=Xn("rp,rt"),bE=za(cy,sy),wE=za(sy,Xn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),DE=za(cy,Xn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),iv=za(ay,wE,DE,bE),ly=Xn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),CE=Xn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),xE=Xn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),EE=za(ly,CE,xE),IE=Xn("script,style,template");var gm=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=TE(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=SE(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=rv(n).toLowerCase();if(!iv.hasOwnProperty(e))return this.sanitizedSomething=!0,!IE.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!EE.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let c=o.value;ly[s]&&(c=Ua(c)),this.buf.push(" ",a,'="',ov(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=rv(n).toLowerCase();iv.hasOwnProperty(e)&&!ay.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(ov(n))}};function ME(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function SE(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw dy(n);return n}function TE(t){let n=t.firstChild;if(n&&ME(t,n))throw dy(n);return n}function rv(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function dy(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var kE=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,AE=/([^\#-~ |!])/g;function ov(t){return t.replace(/&/g,"&amp;").replace(kE,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(AE,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var al;function Qm(t,n){let e=null;try{al=al||_E(t);let i=n?String(n):"";e=al.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=al.getInertBodyElement(i)}while(i!==o);let s=new gm().sanitizeChildren(av(e)||e);return Al(s)}finally{if(e){let i=av(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function av(t){return"content"in t&&RE(t)?t.content:null}function RE(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function NE(t,n){return t.createText(n)}function OE(t,n,e){t.setValue(n,e)}function uy(t,n,e){return t.createElement(n,e)}function _l(t,n,e,i,r){t.insertBefore(n,e,i,r)}function hy(t,n,e){t.appendChild(n,e)}function sv(t,n,e,i,r){i!==null?_l(t,n,e,i,r):hy(t,n,e)}function my(t,n,e,i){t.removeChild(null,n,e,i)}function FE(t,n,e){t.setAttribute(n,"style",e)}function PE(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function fy(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&Yx(t,n,i),r!==null&&PE(t,n,r),o!==null&&FE(t,n,o)}var it=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(it||{});function Jn(t){let n=gy();return n?n.sanitize(it.URL,t)||"":Kn(t,"URL")?fn(t):Ua(or(t))}function py(t){let n=gy();if(n)return nv(n.sanitize(it.RESOURCE_URL,t)||"");if(Kn(t,"ResourceURL"))return nv(fn(t));throw new C(904,!1)}var LE=new Set(["embed","frame","iframe","media","script"]),VE=new Set(["base","link","script"]);function jE(t,n){return n==="src"&&LE.has(t)||n==="href"&&VE.has(t)||n==="xlink:href"&&t==="script"?py:Jn}function Km(t,n,e){return jE(n,e)(t)}function gy(){let t=Z();return t&&t[sn].sanitizer}function _y(t){return t instanceof Function?t():t}function BE(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var vy="ng-template";function HE(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&BE(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Xm(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Xm(t){return t.type===4&&t.value!==vy}function UE(t,n,e){let i=t.type===4&&!e?vy:t.value;return n===i}function zE(t,n,e){let i=4,r=t.attrs,o=r!==null?GE(r):0,a=!1;for(let s=0;s<n.length;s++){let c=n[s];if(typeof c=="number"){if(!a&&!un(i)&&!un(c))return!1;if(a&&un(c))continue;a=!1,i=c|i&1;continue}if(!a)if(i&4){if(i=2|i&1,c!==""&&!UE(t,c,e)||c===""&&n.length===1){if(un(i))return!1;a=!0}}else if(i&8){if(r===null||!HE(t,r,c,e)){if(un(i))return!1;a=!0}}else{let l=n[++s],d=$E(c,r,Xm(t),e);if(d===-1){if(un(i))return!1;a=!0;continue}if(l!==""){let h;if(d>o?h="":h=r[d+1].toLowerCase(),i&2&&l!==h){if(un(i))return!1;a=!0}}}}return un(i)||a}function un(t){return(t&1)===0}function $E(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return qE(n,t)}function yy(t,n,e=!1){for(let i=0;i<n.length;i++)if(zE(t,n[i],e))return!0;return!1}function WE(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function GE(t){for(let n=0;n<t.length;n++){let e=t[n];if(Pv(e))return n}return t.length}function qE(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function YE(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function cv(t,n){return t?":not("+n.trim()+")":n}function ZE(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!un(a)&&(n+=cv(o,r),r=""),i=a,o=o||!un(i);e++}return r!==""&&(n+=cv(o,r)),n}function QE(t){return t.map(ZE).join(",")}function KE(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!un(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var wt={};function Jm(t,n,e,i,r,o,a,s,c,l,d){let h=Ve+i,m=h+r,f=XE(h,m),p=typeof l=="function"?l():l;return f[W]={type:t,blueprint:f,template:e,queries:null,viewQuery:s,declTNode:n,data:f.slice().fill(null,h),bindingStartIndex:h,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:c,consts:p,incompleteFirstPass:!1,ssrId:d}}function XE(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:wt);return e}function JE(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Jm(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function ef(t,n,e,i,r,o,a,s,c,l,d){let h=n.blueprint.slice();return h[an]=r,h[Y]=i|4|128|8|64|1024,(l!==null||t&&t[Y]&2048)&&(h[Y]|=2048),Ih(h),h[$e]=h[sr]=t,h[Le]=e,h[sn]=a||t&&t[sn],h[Ee]=s||t&&t[Ee],h[Un]=c||t&&t[Un]||null,h[gt]=o,h[zn]=cE(),h[ar]=d,h[wh]=l,h[_t]=n.type==2?t[_t]:h,h}function eI(t,n,e){let i=dn(n,t),r=JE(e),o=t[sn].rendererFactory,a=tf(t,ef(t,r,null,by(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function by(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function wy(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function tf(t,n){return t[Yr]?t[bh][Ht]=n:t[Yr]=n,t[bh]=n,n}function w(t=1){Dy(Re(),Z(),En()+t,!1)}function Dy(t,n,e,i){if(!i)if((n[Y]&3)===3){let o=t.preOrderCheckHooks;o!==null&&cl(n,o,e)}else{let o=t.preOrderHooks;o!==null&&ll(n,o,0,e)}Ci(e)}var Rl=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Rl||{});function _m(t,n,e,i){let r=P(null);try{let[o,a,s]=t.inputs[e],c=null;(a&Rl.SignalBased)!==0&&(c=n[o][Ne]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):kv(n,c,o,i)}finally{P(r)}}var Sn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Sn||{}),tI;function nf(t,n){return tI(t,n)}var r9=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var vm=new WeakMap,ym=new WeakSet;function nI(t,n){let e=vm.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),ym.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function iI(t,n){let e=vm.get(t);e?e.includes(n)||e.push(n):vm.set(t,[n])}var pr=new Set,Nl=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Nl||{}),pn=new _(""),lv=new Set;function ei(t){lv.has(t)||(lv.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Ol=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=g({token:t,providedIn:"root",factory:()=>new t})}return t})(),rf=[0,1,2,3],of=(()=>{class t{ngZone=u(O);scheduler=u(Dn);errorHandler=u(ut,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(pn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&ve(de.AfterRenderHooksStart),this.executing=!0;for(let i of rf)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&ve(de.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[lr]??=[]).push(e),hr(i),i[Y]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Nl.AFTER_NEXT_RENDER,e):e()}static \u0275prov=g({token:t,providedIn:"root",factory:()=>new t})}return t})(),Na=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[lr];n&&(this.view[lr]=n.filter(e=>e!==this))}};function $a(t,n){let e=n?.injector??u(re);return ei("NgAfterRender"),Cy(t,e,n,!1)}function rt(t,n){let e=n?.injector??u(re);return ei("NgAfterNextRender"),Cy(t,e,n,!0)}function rI(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function Cy(t,n,e,i){let r=n.get(Ol);r.impl??=n.get(of);let o=n.get(pn,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(tt):null,s=n.get(Kr,null,{optional:!0}),c=new Na(r.impl,rI(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(c),c}var xy=new _("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(we)})});function Ey(t,n,e){let i=t.get(xy);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function oI(t,n){let e=t.get(xy);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function aI(t,n){for(let[e,i]of n)Ey(t,i.animateFns)}function dv(t,n,e,i){let r=t?.[wi]?.enter;n!==null&&r&&r.has(e.index)&&aI(i,r)}function Xr(t,n,e,i,r,o,a,s){if(r!=null){let c,l=!1;cn(r)?c=r:$n(r)&&(l=!0,r=r[an]);let d=Ut(r);t===0&&i!==null?(dv(s,i,o,e),a==null?hy(n,i,d):_l(n,i,d,a||null,!0)):t===1&&i!==null?(dv(s,i,o,e),_l(n,i,d,a||null,!0),nI(o,d)):t===2?(s?.[wi]?.leave?.has(o.index)&&iI(o,d),uv(s,o,e,h=>{if(ym.has(d)){ym.delete(d);return}my(n,d,l,h)})):t===3&&uv(s,o,e,()=>{n.destroyNode(d)}),c!=null&&_I(n,t,e,c,o,i,a)}}function sI(t,n){Iy(t,n),n[an]=null,n[gt]=null}function cI(t,n,e,i,r,o){i[an]=r,i[gt]=n,Pl(t,i,e,1,r,o)}function Iy(t,n){n[sn].changeDetectionScheduler?.notify(9),Pl(t,n,n[Ee],2,null,null)}function lI(t){let n=t[Yr];if(!n)return Qh(t[W],t);for(;n;){let e=null;if($n(n))e=n[Yr];else{let i=n[Fe];i&&(e=i)}if(!e){for(;n&&!n[Ht]&&n!==t;)$n(n)&&Qh(n[W],n),n=n[$e];n===null&&(n=t),$n(n)&&Qh(n[W],n),e=n&&n[Ht]}n=e}}function af(t,n){let e=t[dr],i=e.indexOf(n);e.splice(i,1)}function Fl(t,n){if(ur(n))return;let e=n[Ee];e.destroyNode&&Pl(t,n,e,3,null,null),lI(n)}function Qh(t,n){if(ur(n))return;let e=P(null);try{n[Y]&=-129,n[Y]|=256,n[Nt]&&di(n[Nt]),hI(t,n),uI(t,n),n[W].type===1&&n[Ee].destroy();let i=n[bi];if(i!==null&&cn(n[$e])){i!==n[$e]&&af(i,n);let r=n[xn];r!==null&&r.detachView(t)}sm(n)}finally{P(e)}}function uv(t,n,e,i){let r=t?.[wi];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&pr.add(t[zn]),Ey(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let c=0;c<a.animateFns.length;c++){let l=a.animateFns[c],{promise:d}=l();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),dI(t,i)}else t&&pr.delete(t[zn]),i(!1)},r)}function dI(t,n){let e=t[wi]?.running;if(e){e.then(()=>{t[wi].running=void 0,pr.delete(t[zn]),n(!0)});return}n(!1)}function uI(t,n){let e=t.cleanup,i=n[qr];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[qr]=null);let r=n[Bn];if(r!==null){n[Bn]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[pi];if(o!==null){n[pi]=null;for(let a of o)a.destroy()}}function hI(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof fr)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],c=o[a+1];ve(de.LifecycleHookStart,s,c);try{c.call(s)}finally{ve(de.LifecycleHookEnd,s,c)}}else{ve(de.LifecycleHookStart,r,o);try{o.call(r)}finally{ve(de.LifecycleHookEnd,r,o)}}}}}function My(t,n,e){return mI(t,n.parent,e)}function mI(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[an];if(Wn(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===mn.None||r===mn.Emulated)return null}return dn(i,e)}function Sy(t,n,e){return pI(t,n,e)}function fI(t,n,e){return t.type&40?dn(t,e):null}var pI=fI,hv;function sf(t,n,e,i){let r=My(t,i,n),o=n[Ee],a=i.parent||n[gt],s=Sy(a,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)sv(o,r,e[c],s,!1);else sv(o,r,e,s,!1);hv!==void 0&&hv(o,i,n,e,r)}function ka(t,n){if(n!==null){let e=n.type;if(e&3)return dn(n,t);if(e&4)return bm(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return ka(t,i);{let r=t[n.index];return cn(r)?bm(-1,r):Ut(r)}}else{if(e&128)return ka(t,n.next);if(e&32)return nf(n,t)()||Ut(t[n.index]);{let i=Ty(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=gi(t[_t]);return ka(r,i)}else return ka(t,n.next)}}}return null}function Ty(t,n){if(n!==null){let i=t[_t][gt],r=n.projection;return i.projection[r]}return null}function bm(t,n){let e=Fe+t+1;if(e<n.length){let i=n[e],r=i[W].firstChild;if(r!==null)return ka(i,r)}return n[Di]}function cf(t,n,e,i,r,o,a){for(;e!=null;){let s=i[Un];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(a&&n===0&&(c&&to(Ut(c),i),e.flags|=2),!kl(e))if(l&8)cf(t,n,e.child,i,r,o,!1),Xr(n,t,s,r,c,e,o,i);else if(l&32){let d=nf(e,i),h;for(;h=d();)Xr(n,t,s,r,h,e,o,i);Xr(n,t,s,r,c,e,o,i)}else l&16?ky(t,n,i,e,r,o):Xr(n,t,s,r,c,e,o,i);e=a?e.projectionNext:e.next}}function Pl(t,n,e,i,r,o){cf(e,i,t.firstChild,n,r,o,!1)}function gI(t,n,e){let i=n[Ee],r=My(t,e,n),o=e.parent||n[gt],a=Sy(o,e,n);ky(i,0,n,e,r,a)}function ky(t,n,e,i,r,o){let a=e[_t],c=a[gt].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];Xr(n,t,e[Un],r,d,i,o,e)}else{let l=c,d=a[$e];qv(i)&&(l.flags|=128),cf(t,n,l,d,r,o,!0)}}function _I(t,n,e,i,r,o,a){let s=i[Di],c=Ut(i);s!==c&&Xr(n,t,e,o,s,r,a);for(let l=Fe;l<i.length;l++){let d=i[l];Pl(d[W],d,t,n,o,s)}}function vI(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Sn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Sn.Important),t.setStyle(e,i,r,o))}}function Ay(t,n,e,i,r){let o=En(),a=i&2;try{Ci(-1),a&&n.length>Ve&&Dy(t,n,Ve,!1);let s=a?de.TemplateUpdateStart:de.TemplateCreateStart;ve(s,r,e),e(i,r)}finally{Ci(o);let s=a?de.TemplateUpdateEnd:de.TemplateCreateEnd;ve(s,r,e)}}function lf(t,n,e){xI(t,n,e),(e.flags&64)===64&&EI(t,n,e)}function Ll(t,n,e=dn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function yI(t,n,e,i){let o=i.get(ty,ey)||e===mn.ShadowDom||e===mn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return bI(a),a}function bI(t){wI(t)}var wI=()=>null;function DI(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function Ry(t,n,e,i,r,o){let a=n[W];if(df(t,a,n,e,i)){Wn(t)&&CI(n,t.index);return}t.type&3&&(e=DI(e)),Ny(t,n,e,i,r,o)}function Ny(t,n,e,i,r,o){if(t.type&3){let a=dn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function CI(t,n){let e=zt(n,t);e[Y]&16||(e[Y]|=64)}function xI(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Wn(e)&&eI(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||gl(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],c=Ra(n,t,a,e);if(to(c,n),o!==null&&TI(n,a-i,c,s,e,o),ln(s)){let l=zt(e.index,n);l[Le]=Ra(n,t,a,e)}}}function EI(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=O_();try{Ci(o);for(let s=i;s<r;s++){let c=t.data[s],l=n[s];Kc(s),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&II(c,l)}}finally{Ci(-1),Kc(a)}}function II(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Oy(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];yy(n,o.selectors,!1)&&(i??=[],ln(o)?i.unshift(o):i.push(o))}return i}function MI(t,n,e,i,r,o){let a=dn(t,n);SI(n[Ee],a,o,t.value,e,i,r)}function SI(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?or(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function TI(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let c=a[s],l=a[s+1];_m(i,e,c,l)}}function Fy(t,n,e,i,r){let o=Ve+e,a=n[W],s=r(a,n,t,i,e);n[o]=s,Qr(t,!0);let c=t.type===2;return c?(fy(n[Ee],s,t),(E_()===0||Ca(t))&&to(s,n),I_()):to(s,n),tl()&&(!c||!kl(t))&&sf(a,n,s,t),t}function Py(t){let n=t;return Lh()?Vh():(n=n.parent,Qr(n,!1)),n}function kI(t,n){let e=t[Un];if(!e)return;let i;try{i=e.get(Ot,null)}catch{i=null}i?.(n)}function df(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let c=0;c<a.length;c+=2){let l=a[c],d=a[c+1],h=n.data[l];_m(h,e[l],d,r),s=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];_m(d,l,i,r),s=!0}return s}function AI(t,n){let e=zt(n,t),i=e[W];RI(i,e);let r=e[an];r!==null&&e[ar]===null&&(e[ar]=ny(r,e[Un])),ve(de.ComponentStart);try{uf(i,e,e[Le])}finally{ve(de.ComponentEnd,e[Le])}}function RI(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function uf(t,n,e){Jc(n);try{let i=t.viewQuery;i!==null&&cm(1,i,e);let r=t.template;r!==null&&Ay(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[xn]?.finishViewCreation(t),t.staticContentQueries&&iy(t,n),t.staticViewQueries&&cm(2,t.viewQuery,e);let o=t.components;o!==null&&NI(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[Y]&=-5,el()}}function NI(t,n){for(let e=0;e<n.length;e++)AI(t,n[e])}function Wa(t,n,e,i){let r=P(null);try{let o=n.tView,s=t[Y]&4096?4096:16,c=ef(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[bi]=l;let d=t[xn];return d!==null&&(c[xn]=d.createEmbeddedView(o)),uf(o,c,e),c}finally{P(r)}}function no(t,n){return!n||n.firstChild===null||qv(t)}function Oa(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Ut(o)),cn(o)&&Ly(o,i);let a=e.type;if(a&8)Oa(t,n,e.child,i);else if(a&32){let s=nf(e,n),c;for(;c=s();)i.push(c)}else if(a&16){let s=Ty(n,e);if(Array.isArray(s))i.push(...s);else{let c=gi(n[_t]);Oa(c[W],c,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function Ly(t,n){for(let e=Fe;e<t.length;e++){let i=t[e],r=i[W].firstChild;r!==null&&Oa(i[W],i,r,n)}t[Di]!==t[an]&&n.push(t[Di])}function Vy(t){if(t[lr]!==null){for(let n of t[lr])n.impl.addSequence(n);t[lr].length=0}}var jy=[];function OI(t){return t[Nt]??FI(t)}function FI(t){let n=jy.pop()??Object.create(LI);return n.lView=t,n}function PI(t){t.lView[Nt]!==t&&(t.lView=null,jy.push(t))}var LI=ce(b({},ci),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{hr(t.lView)},consumerOnSignalRead(){this.lView[Nt]=this}});function VI(t){let n=t[Nt]??Object.create(jI);return n.lView=t,n}var jI=ce(b({},ci),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=gi(t.lView);for(;n&&!By(n[W]);)n=gi(n);n&&Mh(n)},consumerOnSignalRead(){this.lView[Nt]=this}});function By(t){return t.type!==2}function Hy(t){if(t[pi]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[pi])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[Y]&8192)}}var BI=100;function Uy(t,n=0){let i=t[sn].rendererFactory,r=!1;r||i.begin?.();try{HI(t,n)}finally{r||i.end?.()}}function HI(t,n){let e=jh();try{pa(!0),wm(t,n);let i=0;for(;xa(t);){if(i===BI)throw new C(103,!1);i++,wm(t,1)}}finally{pa(e)}}function UI(t,n,e,i){if(ur(n))return;let r=n[Y],o=!1,a=!1;Jc(n);let s=!0,c=null,l=null;o||(By(t)?(l=OI(n),c=Ln(l)):Ks()===null?(s=!1,l=VI(n),c=Ln(l)):n[Nt]&&(di(n[Nt]),n[Nt]=null));try{Ih(n),A_(t.bindingStartIndex),e!==null&&Ay(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let f=t.preOrderCheckHooks;f!==null&&cl(n,f,null)}else{let f=t.preOrderHooks;f!==null&&ll(n,f,0,null),Yh(n,0)}if(a||zI(n),Hy(n),zy(n,0),t.contentQueries!==null&&iy(t,n),!o)if(d){let f=t.contentCheckHooks;f!==null&&cl(n,f)}else{let f=t.contentHooks;f!==null&&ll(n,f,1),Yh(n,1)}WI(t,n);let h=t.components;h!==null&&Wy(n,h,0);let m=t.viewQuery;if(m!==null&&cm(2,m,i),!o)if(d){let f=t.viewCheckHooks;f!==null&&cl(n,f)}else{let f=t.viewHooks;f!==null&&ll(n,f,2),Yh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Gc]){for(let f of n[Gc])f();n[Gc]=null}o||(Vy(n),n[Y]&=-73)}catch(d){throw o||hr(n),d}finally{l!==null&&(li(l,c),s&&PI(l)),el()}}function zy(t,n){for(let e=Zv(t);e!==null;e=Qv(e))for(let i=Fe;i<e.length;i++){let r=e[i];$y(r,n)}}function zI(t){for(let n=Zv(t);n!==null;n=Qv(n)){if(!(n[Y]&2))continue;let e=n[dr];for(let i=0;i<e.length;i++){let r=e[i];Mh(r)}}}function $I(t,n,e){ve(de.ComponentStart);let i=zt(n,t);try{$y(i,e)}finally{ve(de.ComponentEnd,i[Le])}}function $y(t,n){Yc(t)&&wm(t,n)}function wm(t,n){let i=t[W],r=t[Y],o=t[Nt],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&Pr(o)),a||=!1,o&&(o.dirty=!1),t[Y]&=-9217,a)UI(i,t,i.template,t[Le]);else if(r&8192){let s=P(null);try{Hy(t),zy(t,1);let c=i.components;c!==null&&Wy(t,c,1),Vy(t)}finally{P(s)}}}function Wy(t,n,e){for(let i=0;i<n.length;i++)$I(t,n[i],e)}function WI(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Ci(~r);else{let o=r,a=e[++i],s=e[++i];N_(a,o);let c=n[o];ve(de.HostBindingsUpdateStart,c);try{s(2,c)}finally{ve(de.HostBindingsUpdateEnd,c)}}}}finally{Ci(-1)}}function hf(t,n){let e=jh()?64:1088;for(t[sn].changeDetectionScheduler?.notify(n);t;){t[Y]|=e;let i=gi(t);if(Zr(t)&&!i)return t;t=i}return null}function Gy(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function qy(t,n){let e=Fe+n;if(e<t.length)return t[e]}function Ga(t,n,e,i=!0){let r=n[W];if(GI(r,n,t,e),i){let a=bm(e,t),s=n[Ee],c=s.parentNode(t[Di]);c!==null&&cI(r,t[gt],s,n,c,a)}let o=n[ar];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Yy(t,n){let e=Fa(t,n);return e!==void 0&&Fl(e[W],e),e}function Fa(t,n){if(t.length<=Fe)return;let e=Fe+n,i=t[e];if(i){let r=i[bi];r!==null&&r!==t&&af(r,i),n>0&&(t[e-1][Ht]=i[Ht]);let o=ba(t,Fe+n);sI(i[W],i);let a=o[xn];a!==null&&a.detachView(o[W]),i[$e]=null,i[Ht]=null,i[Y]&=-129}return i}function GI(t,n,e,i){let r=Fe+i,o=e.length;i>0&&(e[r-1][Ht]=n),i<o-Fe?(n[Ht]=e[r],fh(e,Fe+i,n)):(e.push(n),n[Ht]=null),n[$e]=e;let a=n[bi];a!==null&&e!==a&&Zy(a,n);let s=n[xn];s!==null&&s.insertView(t),Zc(n),n[Y]|=128}function Zy(t,n){let e=t[dr],i=n[$e];if($n(i))t[Y]|=2;else{let r=i[$e][_t];n[_t]!==r&&(t[Y]|=2)}e===null?t[dr]=[n]:e.push(n)}var Ei=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[W];return Oa(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Le]}set context(n){this._lView[Le]=n}get destroyed(){return ur(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[$e];if(cn(n)){let e=n[Da],i=e?e.indexOf(this):-1;i>-1&&(Fa(n,i),ba(e,i))}this._attachedToViewContainer=!1}Fl(this._lView[W],this._lView)}onDestroy(n){Sh(this._lView,n)}markForCheck(){hf(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Y]&=-129}reattach(){Zc(this._lView),this._lView[Y]|=128}detectChanges(){this._lView[Y]|=1024,Uy(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new C(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Zr(this._lView),e=this._lView[bi];e!==null&&!n&&af(e,this._lView),Iy(this._lView[W],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new C(902,!1);this._appRef=n;let e=Zr(this._lView),i=this._lView[bi];i!==null&&!e&&Zy(i,this._lView),Zc(this._lView)}};var Wt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=qI;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Wa(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Ei(o)}}return t})();function qI(){return Vl(Ke(),Z())}function Vl(t,n){return t.type&4?new Wt(n,t,ro(t,n)):null}function ao(t,n,e,i,r){let o=t.data[n];if(o===null)o=YI(t,n,e,i,r),R_()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=M_();o.injectorIndex=a===null?-1:a.injectorIndex}return Qr(o,!0),o}function YI(t,n,e,i,r){let o=Ph(),a=Lh(),s=a?o:o&&o.parent,c=t.data[n]=QI(t,s,e,n,i,r);return ZI(t,c,o,a),c}function ZI(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function QI(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Nh()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function KI(t){let n=t[Dh]??[],i=t[$e][Ee],r=[];for(let o of n)o.data[Jv]!==void 0?r.push(o):XI(o,i);t[Dh]=r}function XI(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[Xv];for(;e<r;){let o=i.nextSibling;my(n,i,!1),i=o,e++}}}var JI=()=>null,eM=()=>null;function vl(t,n){return JI(t,n)}function Qy(t,n,e){return eM(t,n,e)}var Ky=class{},jl=class{},Dm=class{resolveComponentFactory(n){throw new C(917,!1)}},qa=class{static NULL=new Dm},Xe=class{},je=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>tM()}return t})();function tM(){let t=Z(),n=Ke(),e=zt(n.index,t);return($n(e)?e:t)[Ee]}var Xy=(()=>{class t{static \u0275prov=g({token:t,providedIn:"root",factory:()=>null})}return t})();var ul={},Cm=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,ul,i);return r!==ul||e===ul?r:this.parentInjector.get(n,e,i)}};function yl(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=Vc(r,s);else if(o==2){let c=s,l=n[++a];i=Vc(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function ht(t,n=0){let e=Z();if(e===null)return N(t,n);let i=Ke();return zv(i,e,ze(t),n)}function Bl(){let t="invalid";throw new Error(t)}function Jy(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,c=null,l=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,c,l]=d.resolveHostDirectives(a);break}rM(t,n,e,s,o,c,l)}o!==null&&i!==null&&nM(e,i,o)}function nM(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new C(-301,!1);i.push(n[r],o)}}function iM(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function rM(t,n,e,i,r,o,a){let s=i.length,c=null;for(let m=0;m<s;m++){let f=i[m];c===null&&ln(f)&&(c=f,iM(t,e,m)),om(gl(e,n),t,f.type)}dM(e,t.data.length,s),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let m=0;m<s;m++){let f=i[m];f.providersResolver&&f.providersResolver(f)}let l=!1,d=!1,h=wy(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let m=0;m<s;m++){let f=i[m];if(e.mergedAttrs=eo(e.mergedAttrs,f.hostAttrs),aM(t,e,n,h,f),lM(h,f,r),a!==null&&a.has(f)){let[D,E]=a.get(f);e.directiveToIndex.set(f.type,[h,D+e.directiveStart,E+e.directiveStart])}else(o===null||!o.has(f))&&e.directiveToIndex.set(f.type,h);f.contentQueries!==null&&(e.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(e.flags|=64);let p=f.type.prototype;!l&&(p.ngOnChanges||p.ngOnInit||p.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(p.ngOnChanges||p.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),h++}oM(t,e,o)}function oM(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))mv(0,n,r,i),mv(1,n,r,i),pv(n,i,!1);else{let o=e.get(r);fv(0,n,o,i),fv(1,n,o,i),pv(n,i,!0)}}}function mv(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),eb(n,o)}}function fv(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),eb(n,a)}}function eb(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function pv(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Xm(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let c=i[s];if(c===0){s+=4;continue}else if(c===5){s+=2;continue}else if(typeof c=="number")break;if(!e&&r.hasOwnProperty(c)){let l=r[c];for(let d of l)if(d===n){a??=[],a.push(c,i[s+1]);break}}else if(e&&o.hasOwnProperty(c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){a??=[],a.push(l[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function aM(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=tr(r.type,!0)),a=new fr(o,ln(r),ht,null);t.blueprint[i]=a,e[i]=a,sM(t,n,i,wy(t,e,r.hostVars,wt),r)}function sM(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;cM(a)!=s&&a.push(s),a.push(e,i,o)}}function cM(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function lM(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;ln(n)&&(e[""]=t)}}function dM(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function tb(t,n,e,i,r,o,a,s){let c=n[W],l=c.consts,d=$t(l,a),h=ao(c,t,e,i,d);return o&&Jy(c,n,h,$t(l,s),r),h.mergedAttrs=eo(h.mergedAttrs,h.attrs),h.attrs!==null&&yl(h,h.attrs,!1),h.mergedAttrs!==null&&yl(h,h.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,h),h}function nb(t,n){Ov(t,n),Ch(n)&&t.queries.elementEnd(n)}function uM(t,n,e,i,r,o){let a=n.consts,s=$t(a,r),c=ao(n,t,e,i,s);if(c.mergedAttrs=eo(c.mergedAttrs,c.attrs),o!=null){let l=$t(a,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&yl(c,c.attrs,!1),c.mergedAttrs!==null&&yl(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}function hM(t,n,e){return t[n]=e}function mM(t,n){return t[n]}function Gt(t,n,e){if(e===wt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function fM(t,n,e,i){let r=Gt(t,n,e);return Gt(t,n+1,i)||r}function hl(t,n,e){return function i(r){let o=Wn(t)?zt(t.index,n):n;hf(o,5);let a=n[Le],s=gv(n,a,e,r),c=i.__ngNextListenerFn__;for(;c;)s=gv(n,a,c,r)&&s,c=c.__ngNextListenerFn__;return s}}function gv(t,n,e,i){let r=P(null);try{return ve(de.OutputStart,n,e),e(i)!==!1}catch(o){return kI(t,o),!1}finally{ve(de.OutputEnd,n,e),P(r)}}function ib(t,n,e,i,r,o,a,s){let c=Ca(t),l=!1,d=null;if(!i&&c&&(d=gM(n,e,o,t.index)),d!==null){let h=d.__ngLastListenerFn__||d;h.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,l=!0}else{let h=dn(t,e),m=i?i(h):h;mE(e,m,o,s);let f=r.listen(m,o,s);if(!pM(o)){let p=i?D=>i(Ut(D[t.index])):t.index;rb(p,n,e,o,s,f,!1)}}return l}function pM(t){return t.startsWith("animation")||t.startsWith("transition")}function gM(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[qr],c=r[o+2];return s&&s.length>c?s[c]:null}typeof a=="string"&&(o+=2)}return null}function rb(t,n,e,i,r,o,a){let s=n.firstCreatePass?kh(n):null,c=Th(e),l=c.length;c.push(r,o),s&&s.push(i,t,l,(l+1)*(a?-1:1))}function _v(t,n,e,i,r,o){let a=n[e],s=n[W],l=s.data[e].outputs[i],h=a[l].subscribe(o);rb(t.index,s,n,r,o,h,!0)}var xm=Symbol("BINDING");function ob(t){return t.debugInfo?.className||t.type.name||null}var bl=class extends qa{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Hn(n);return new gr(e,this.ngModule)}};function _M(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Rl.SignalBased)!==0};return r&&(o.transform=r),o})}function vM(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function yM(t,n,e){let i=n instanceof we?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Cm(e,i):e}function bM(t){let n=t.get(Xe,null);if(n===null)throw new C(407,!1);let e=t.get(Xy,null),i=t.get(Dn,null),r=t.get(pn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function wM(t,n){let e=ab(t);return uy(n,e,e==="svg"?xh:e==="math"?v_:null)}function ab(t){return(t.selectors[0][0]||"div").toLowerCase()}var gr=class extends jl{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=_M(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=vM(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=QE(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){ve(de.DynamicComponentStart);let s=P(null);try{let c=this.componentDef,l=yM(c,r||this.ngModule,n),d=bM(l),h=d.tracingService;return h&&h.componentCreate?h.componentCreate(ob(c),()=>this.createComponentRef(d,l,e,i,o,a)):this.createComponentRef(d,l,e,i,o,a)}finally{P(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,c=DM(r,s,a,o),l=n.rendererFactory.createRenderer(null,s),d=r?yI(l,r,s.encapsulation,e):wM(s,l),h=a?.some(vv)||o?.some(p=>typeof p!="function"&&p.bindings.some(vv)),m=ef(null,c,null,512|by(s),null,null,n,l,e,null,ny(d,e,!0));m[Ve]=d,Jc(m);let f=null;try{let p=tb(Ve,m,2,"#host",()=>c.directiveRegistry,!0,0);fy(l,d,p),to(d,m),lf(c,m,p),ry(c,p,m),nb(c,p),i!==void 0&&xM(p,this.ngContentSelectors,i),f=zt(p.index,m),m[Le]=f[Le],uf(c,m,null)}catch(p){throw f!==null&&sm(f),sm(m),p}finally{ve(de.DynamicComponentEnd),el()}return new wl(this.componentType,m,!!h)}};function DM(t,n,e,i){let r=t?["ng-version","21.2.5"]:KE(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[xm].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let h=i[d];if(typeof h!="function")for(let m of h.bindings){s+=m[xm].requiredVars;let f=d+1;m.create&&(m.targetIdx=f,(o??=[]).push(m)),m.update&&(m.targetIdx=f,(a??=[]).push(m))}}let c=[n];if(i)for(let d of i){let h=typeof d=="function"?d:d.type,m=Bc(h);c.push(m)}return Jm(0,null,CM(o,a),1,s,c,null,null,null,[r],null)}function CM(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function vv(t){let n=t[xm].kind;return n==="input"||n==="twoWay"}var wl=class extends Ky{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=qc(e[W],Ve),this.location=ro(this._tNode,e),this.instance=zt(this._tNode.index,e)[Le],this.hostView=this.changeDetectorRef=new Ei(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=df(i,r[W],r,n,e);this.previousInputValues.set(n,e);let a=zt(i.index,r);hf(a,1)}get injector(){return new mr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function xM(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var ot=(()=>{class t{static __NG_ELEMENT_ID__=EM}return t})();function EM(){let t=Ke();return sb(t,Z())}var Em=class t extends ot{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return ro(this._hostTNode,this._hostLView)}get injector(){return new mr(this._hostTNode,this._hostLView)}get parentInjector(){let n=Um(this._hostTNode,this._hostLView);if(Lv(n)){let e=pl(n,this._hostLView),i=fl(n),r=e[W].data[i+8];return new mr(r,e)}else return new mr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=yv(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Fe}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=vl(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,no(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let c=n&&!Bx(n),l;if(c)l=e;else{let E=e||{};l=E.index,i=E.injector,r=E.projectableNodes,o=E.environmentInjector||E.ngModuleRef,a=E.directives,s=E.bindings}let d=c?n:new gr(Hn(n)),h=i||this.parentInjector;if(!o&&d.ngModule==null){let S=(c?h:this.parentInjector).get(we,null);S&&(o=S)}let m=Hn(d.componentType??{}),f=vl(this._lContainer,m?.id??null),p=f?.firstChild??null,D=d.create(h,r,p,o,a,s);return this.insertImpl(D.hostView,l,no(this._hostTNode,f)),D}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(w_(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let c=r[$e],l=new t(c,c[gt],c[$e]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return Ga(a,r,o,i),n.attachToViewContainerRef(),fh(Kh(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=yv(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Fa(this._lContainer,e);i&&(ba(Kh(this._lContainer),e),Fl(i[W],i))}detach(n){let e=this._adjustIndex(n,-1),i=Fa(this._lContainer,e);return i&&ba(Kh(this._lContainer),e)!=null?new Ei(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function yv(t){return t[Da]}function Kh(t){return t[Da]||(t[Da]=[])}function sb(t,n){let e,i=n[t.index];return cn(i)?e=i:(e=Gy(i,n,null,t),n[t.index]=e,tf(n,e)),MM(e,n,t,i),new Em(e,t,n)}function IM(t,n){let e=t[Ee],i=e.createComment(""),r=dn(n,t),o=e.parentNode(r);return _l(e,o,i,e.nextSibling(r),!1),i}var MM=kM,SM=()=>!1;function TM(t,n,e){return SM(t,n,e)}function kM(t,n,e,i){if(t[Di])return;let r;e.type&8?r=Ut(i):r=IM(n,e),t[Di]=r}var Im=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Mm=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)ff(n,e).matches!==null&&this.queries[e].setDirty()}},Dl=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=FM(n):this.predicate=n}},Sm=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Tm=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,AM(e,o)),this.matchTNodeWithReadOption(n,e,dl(e,n,o,!1,!1))}else i===Wt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,dl(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===j||r===ot||r===Wt&&e.type&4)this.addMatch(e.index,-2);else{let o=dl(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function AM(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function RM(t,n){return t.type&11?ro(t,n):t.type&4?Vl(t,n):null}function NM(t,n,e,i){return e===-1?RM(n,t):e===-2?OM(t,n,i):Ra(t,t[W],e,n)}function OM(t,n,e){if(e===j)return ro(n,t);if(e===Wt)return Vl(n,t);if(e===ot)return sb(n,t)}function cb(t,n,e,i){let r=n[xn].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let c=0;a!==null&&c<a.length;c+=2){let l=a[c];if(l<0)s.push(null);else{let d=o[l];s.push(NM(n,d,a[c+1],e.metadata.read))}}r.matches=s}return r.matches}function km(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=cb(t,n,r,e);for(let s=0;s<o.length;s+=2){let c=o[s];if(c>0)i.push(a[s/2]);else{let l=o[s+1],d=n[-c];for(let h=Fe;h<d.length;h++){let m=d[h];m[bi]===m[$e]&&km(m[W],m,l,i)}if(d[dr]!==null){let h=d[dr];for(let m=0;m<h.length;m++){let f=h[m];km(f[W],f,l,i)}}}}}return i}function mf(t,n){return t[xn].queries[n].queryList}function lb(t,n,e){let i=new Mn((e&4)===4);return x_(t,n,i,i.destroy),(n[xn]??=new Mm).queries.push(new Im(i))-1}function db(t,n,e){let i=Re();return i.firstCreatePass&&(hb(i,new Dl(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),lb(i,Z(),n)}function ub(t,n,e,i){let r=Re();if(r.firstCreatePass){let o=Ke();hb(r,new Dl(n,e,i),o.index),PM(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return lb(r,Z(),e)}function FM(t){return t.split(",").map(n=>n.trim())}function hb(t,n,e){t.queries===null&&(t.queries=new Sm),t.queries.track(new Tm(n,e))}function PM(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function ff(t,n){return t.queries.getByIndex(n)}function mb(t,n){let e=t[W],i=ff(e,n);return i.crossesNgTemplate?km(e,t,n,[]):cb(e,t,i,n)}function fb(t,n,e){let i,r=ea(()=>{i._dirtyCounter();let o=LM(i,t);if(n&&o===void 0)throw new C(-951,!1);return o});return i=r[Ne],i._dirtyCounter=M(0),i._flatValue=void 0,r}function pf(t){return fb(!0,!1,t)}function gf(t){return fb(!0,!0,t)}function pb(t,n){let e=t[Ne];e._lView=Z(),e._queryIndex=n,e._queryList=mf(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function LM(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[Y]&4)return n?void 0:dt;let r=mf(e,i),o=mb(e,i);return r.reset(o,Gv),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Tn=class{},Hl=class{};var Cl=class extends Tn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new bl(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=uh(n);this._bootstrapComponents=_y(o.bootstrap),this._r3Injector=Uh(n,e,[{provide:Tn,useValue:this},{provide:qa,useValue:this.componentFactoryResolver},...i],va(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},xl=class extends Hl{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Cl(this.moduleType,n,[])}};var Pa=class extends Tn{injector;componentFactoryResolver=new bl(this);instance=null;constructor(n){super();let e=new ir([...n.providers,{provide:Tn,useValue:this},{provide:qa,useValue:this.componentFactoryResolver}],n.parent||Gr(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Ya(t,n,e=null){return new Pa({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var VM=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=_h(!1,e.type),r=i.length>0?Ya([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=g({token:t,providedIn:"environment",factory:()=>new t(N(we))})}return t})();function x(t){return ja(()=>{let n=gb(t),e=ce(b({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===zm.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(VM).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||mn.Emulated,styles:t.styles||dt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&ei("NgStandalone"),_b(e);let i=t.dependencies;return e.directiveDefs=bv(i,jM),e.pipeDefs=bv(i,i_),e.id=UM(e),e})}function jM(t){return Hn(t)||Bc(t)}function G(t){return ja(()=>({type:t.type,bootstrap:t.bootstrap||dt,declarations:t.declarations||dt,imports:t.imports||dt,exports:t.exports||dt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function BM(t,n){if(t==null)return on;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,c;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,c=r[3]||null):(o=r,a=r,s=Rl.None,c=null),e[o]=[i,s,c],n[o]=a}return e}function HM(t){if(t==null)return on;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function k(t){return ja(()=>{let n=gb(t);return _b(n),n})}function gb(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||on,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||dt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:BM(t.inputs,n),outputs:HM(t.outputs),debugInfo:null}}function _b(t){t.features?.forEach(n=>n(t))}function bv(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function UM(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function _f(t){let n=e=>{let i=Array.isArray(t);e.hostDirectives===null?(e.resolveHostDirectives=zM,e.hostDirectives=i?t.map(Am):[t]):i?e.hostDirectives.unshift(...t.map(Am)):e.hostDirectives.unshift(t)};return n.ngInherit=!0,n}function zM(t){let n=[],e=!1,i=null,r=null;for(let o=0;o<t.length;o++){let a=t[o];if(a.hostDirectives!==null){let s=n.length;i??=new Map,r??=new Map,vb(a,n,i),r.set(a,[s,n.length-1])}o===0&&ln(a)&&(e=!0,n.push(a))}for(let o=e?1:0;o<t.length;o++)n.push(t[o]);return[n,i,r]}function vb(t,n,e){if(t.hostDirectives!==null)for(let i of t.hostDirectives)if(typeof i=="function"){let r=i();for(let o of r)wv(Am(o),n,e)}else wv(i,n,e)}function wv(t,n,e){let i=Bc(t.directive);$M(i.declaredInputs,t.inputs),vb(i,n,e),e.set(i,t),n.push(i)}function Am(t){return typeof t=="function"?{directive:ze(t),inputs:on,outputs:on}:{directive:ze(t.directive),inputs:Dv(t.inputs),outputs:Dv(t.outputs)}}function Dv(t){if(t===void 0||t.length===0)return on;let n={};for(let e=0;e<t.length;e+=2)n[t[e]]=t[e+1];return n}function $M(t,n){for(let e in n)if(n.hasOwnProperty(e)){let i=n[e],r=t[e];t[i]=r}}function WM(t){return Object.getPrototypeOf(t.prototype).constructor}function We(t){let n=WM(t.type),e=!0,i=[t];for(;n;){let r;if(ln(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new C(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=Xh(t.inputs),a.declaredInputs=Xh(t.declaredInputs),a.outputs=Xh(t.outputs);let s=r.hostBindings;s&&QM(t,s);let c=r.viewQuery,l=r.contentQueries;if(c&&YM(t,c),l&&ZM(t,l),GM(t,r),n_(t.outputs,r.outputs),ln(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===We&&(e=!1)}}n=Object.getPrototypeOf(n)}qM(i)}function GM(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function qM(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=eo(r.hostAttrs,e=eo(e,r.hostAttrs))}}function Xh(t){return t===on?{}:t===dt?[]:t}function YM(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function ZM(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function QM(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function yb(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=eo(t.mergedAttrs,t.attrs);let d=t.tView=Jm(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Qr(t,!1);let c=XM(e,n,t,i);tl()&&sf(e,n,c,t),to(c,n);let l=Gy(c,n,c,t);n[i+Ve]=l,tf(n,l),TM(l,t,n)}function KM(t,n,e,i,r,o,a,s,c,l,d){let h=e+Ve,m;return n.firstCreatePass?(m=ao(n,h,4,a||null,s||null),Rh()&&Jy(n,t,m,$t(n.consts,l),Oy),Ov(n,m)):m=n.data[h],yb(m,t,n,e,i,r,o,c),Ca(m)&&lf(n,t,m),l!=null&&Ll(t,m,d),m}function La(t,n,e,i,r,o,a,s,c,l,d){let h=e+Ve,m;if(n.firstCreatePass){if(m=ao(n,h,4,a||null,s||null),l!=null){let f=$t(n.consts,l);m.localNames=[];for(let p=0;p<f.length;p+=2)m.localNames.push(f[p],-1)}}else m=n.data[h];return yb(m,t,n,e,i,r,o,c),l!=null&&Ll(t,m,d),m}function qt(t,n,e,i,r,o,a,s){let c=Z(),l=Re(),d=$t(l.consts,o);return KM(c,l,t,n,e,i,r,d,void 0,a,s),qt}var XM=JM;function JM(t,n,e,i){return nl(!0),n[Ee].createComment("")}var Ul=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function so(t){return typeof t=="function"&&t[Ne]!==void 0}function vf(t){return so(t)&&typeof t.set=="function"}var yf=new _("");function co(t){return!!t&&typeof t.then=="function"}function bf(t){return!!t&&typeof t.subscribe=="function"}var bb=new _("");var wf=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(bb,{optional:!0})??[];injector=u(re);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=Qe(this.injector,r);if(co(o))e.push(o);else if(bf(o)){let a=new Promise((s,c)=>{o.subscribe({complete:s,error:c})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zl=new _("");function wb(){Tu(()=>{let t="";throw new C(600,t)})}function Db(t){return t.isBoundToModule}var e1=10;var Yt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(Ot);afterRenderManager=u(Ol);zonelessEnabled=u(Sa);rootEffectScheduler=u(il);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new I;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(qn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ne(e=>!e))}constructor(){u(pn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(we);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=re.NULL){return this._injector.get(O).run(()=>{ve(de.BootstrapComponentStart);let a=e instanceof jl;if(!this._injector.get(wf).done){let p="";throw new C(405,p)}let c;a?c=e:c=this._injector.get(qa).resolveComponentFactory(e),this.componentTypes.push(c.componentType);let l=Db(c)?void 0:this._injector.get(Tn),d=i||c.selector,h=c.create(r,[],d,l),m=h.location.nativeElement,f=h.injector.get(yf,null);return f?.registerApplication(m),h.onDestroy(()=>{this.detachView(h.hostView),Aa(this.components,h),f?.unregisterApplication(m)}),this._loadComponent(h),ve(de.BootstrapComponentEnd,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ve(de.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Nl.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw ve(de.ChangeDetectionEnd),new C(101,!1);let e=P(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,P(e),this.afterTick.next(),ve(de.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Xe,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<e1;){ve(de.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{ve(de.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!xa(r))continue;let o=i&&!this.zonelessEnabled?0:1;Uy(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>xa(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Aa(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(zl,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Aa(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new C(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Aa(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function le(t,n,e,i){let r=Z(),o=Gn();if(Gt(r,o,n)){let a=Re(),s=Ia();MI(s,r,t,n,e,i)}return le}var Rm=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Jh(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function t1(t,n,e,i){let r,o,a=0,s=t.length-1,c=void 0;if(Array.isArray(n)){P(i);let l=n.length-1;for(P(null);a<=s&&a<=l;){let d=t.at(a),h=n[a],m=Jh(a,d,a,h,e);if(m!==0){m<0&&t.updateValue(a,h),a++;continue}let f=t.at(s),p=n[l],D=Jh(s,f,l,p,e);if(D!==0){D<0&&t.updateValue(s,p),s--,l--;continue}let E=e(a,d),S=e(s,f),fe=e(a,h);if(Object.is(fe,S)){let qe=e(l,p);Object.is(qe,E)?(t.swap(a,s),t.updateValue(s,p),l--,s--):t.move(s,a),t.updateValue(a,h),a++;continue}if(r??=new El,o??=xv(t,a,s,e),Nm(t,r,a,fe))t.updateValue(a,h),a++,s++;else if(o.has(fe))r.set(E,t.detach(a)),s--;else{let qe=t.create(a,n[a]);t.attach(a,qe),a++,s++}}for(;a<=l;)Cv(t,r,e,a,n[a]),a++}else if(n!=null){P(i);let l=n[Symbol.iterator]();P(null);let d=l.next();for(;!d.done&&a<=s;){let h=t.at(a),m=d.value,f=Jh(a,h,a,m,e);if(f!==0)f<0&&t.updateValue(a,m),a++,d=l.next();else{r??=new El,o??=xv(t,a,s,e);let p=e(a,m);if(Nm(t,r,a,p))t.updateValue(a,m),a++,s++,d=l.next();else if(!o.has(p))t.attach(a,t.create(a,m)),a++,s++,d=l.next();else{let D=e(a,h);r.set(D,t.detach(a)),s--}}}for(;!d.done;)Cv(t,r,e,t.length,d.value),d=l.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(l=>{t.destroy(l)})}function Nm(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function Cv(t,n,e,i,r){if(Nm(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function xv(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var El=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function ye(t,n,e,i,r,o,a,s){ei("NgControlFlow");let c=Z(),l=Re(),d=$t(l.consts,o);return La(c,l,t,n,e,i,r,d,256,a,s),Df}function Df(t,n,e,i,r,o,a,s){ei("NgControlFlow");let c=Z(),l=Re(),d=$t(l.consts,o);return La(c,l,t,n,e,i,r,d,512,a,s),Df}function be(t,n){ei("NgControlFlow");let e=Z(),i=Gn(),r=e[i]!==wt?e[i]:-1,o=r!==-1?Il(e,Ve+r):void 0,a=0;if(Gt(e,i,t)){let s=P(null);try{if(o!==void 0&&Yy(o,a),t!==-1){let c=Ve+t,l=Il(e,c),d=Lm(e[W],c),h=Qy(l,d,e),m=Wa(e,d,n,{dehydratedView:h});Ga(l,m,a,no(d,h))}}finally{P(s)}}else if(o!==void 0){let s=qy(o,a);s!==void 0&&(s[Le]=n)}}var Om=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-Fe}};function vr(t){return t}var Fm=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function Ft(t,n,e,i,r,o,a,s,c,l,d,h,m){ei("NgControlFlow");let f=Z(),p=Re(),D=c!==void 0,E=Z(),S=s?a.bind(E[_t][Le]):a,fe=new Fm(D,S);E[Ve+t]=fe,La(f,p,t+1,n,e,i,r,$t(p.consts,o),256),D&&La(f,p,t+2,c,l,d,h,$t(p.consts,m),512)}var Pm=class extends Rm{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-Fe}at(n){return this.getLView(n)[Le].$implicit}attach(n,e){let i=e[ar];this.needsIndexUpdate||=n!==this.length,Ga(this.lContainer,e,n,no(this.templateTNode,i)),n1(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,i1(this.lContainer,n),r1(this.lContainer,n)}create(n,e){let i=vl(this.lContainer,this.templateTNode.tView.ssrId);return Wa(this.hostLView,this.templateTNode,new Om(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Fl(n[W],n)}updateValue(n,e){this.getLView(n)[Le].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Le].$index=n}getLView(n){return o1(this.lContainer,n)}};function Pt(t){let n=P(null),e=En();try{let i=Z(),r=i[W],o=i[e],a=e+1,s=Il(i,a);if(o.liveCollection===void 0){let l=Lm(r,a);o.liveCollection=new Pm(s,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(t1(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=Gn(),d=c.length===0;if(Gt(i,l,d)){let h=e+2,m=Il(i,h);if(d){let f=Lm(r,h),p=Qy(m,f,i),D=Wa(i,f,void 0,{dehydratedView:p});Ga(m,D,0,no(f,p))}else r.firstUpdatePass&&KI(m),Yy(m,0)}}}finally{P(n)}}function Il(t,n){return t[n]}function n1(t,n){if(t.length<=Fe)return;let e=Fe+n,i=t[e],r=i?i[wi]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Un];oI(o,r),pr.delete(i[zn]),r.detachedLeaveAnimationFns=void 0}}function i1(t,n){if(t.length<=Fe)return;let e=Fe+n,i=t[e],r=i?i[wi]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function r1(t,n){return Fa(t,n)}function o1(t,n){return qy(t,n)}function Lm(t,n){return qc(t,n)}function Q(t,n,e){let i=Z(),r=Gn();if(Gt(i,r,n)){let o=Re(),a=Ia();Ry(a,i,t,n,i[Ee],e)}return Q}function Vm(t,n,e,i,r){df(n,t,e,r?"class":"style",i)}function v(t,n,e,i){let r=Z(),o=r[W],a=t+Ve,s=o.firstCreatePass?tb(a,r,2,n,Oy,Rh(),e,i):o.data[a];if(Wn(s)){let c=r[sn].tracingService;if(c&&c.componentCreate){let l=o.data[s.directiveStart+s.componentOffset];return c.componentCreate(ob(l),()=>(Ev(t,n,r,s,i),v))}}return Ev(t,n,r,s,i),v}function Ev(t,n,e,i,r){if(Fy(i,e,t,n,Cb),Ca(i)){let o=e[W];lf(o,e,i),ry(o,i,e)}r!=null&&Ll(e,i)}function y(){let t=Re(),n=Ke(),e=Py(n);return t.firstCreatePass&&nb(t,e),Oh(e)&&Fh(),Ah(),e.classesWithoutHost!=null&&Gx(e)&&Vm(t,e,Z(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&qx(e)&&Vm(t,e,Z(),e.stylesWithoutHost,!1),y}function X(t,n,e,i){return v(t,n,e,i),y(),X}function A(t,n,e,i){let r=Z(),o=r[W],a=t+Ve,s=o.firstCreatePass?uM(a,o,2,n,e,i):o.data[a];return Fy(s,r,t,n,Cb),i!=null&&Ll(r,s),A}function B(){let t=Ke(),n=Py(t);return Oh(n)&&Fh(),Ah(),B}function z(t,n,e,i){return A(t,n,e,i),B(),z}var Cb=(t,n,e,i,r)=>(nl(!0),uy(n[Ee],i,B_()));function lo(){return Z()}function Zt(t,n,e){let i=Z(),r=Gn();if(Gt(i,r,n)){let o=Re(),a=Ia();Ny(a,i,t,n,i[Ee],e)}return Zt}var Za="en-US";var a1=Za;function xb(t){typeof t=="string"&&(a1=t.toLowerCase().replace(/_/g,"-"))}function De(t,n,e){let i=Z(),r=Re(),o=Ke();return Eb(r,i,i[Ee],o,t,n,e),De}function uo(t,n,e){let i=Z(),r=Re(),o=Ke();return(o.type&3||e)&&ib(o,r,i,e,i[Ee],t,n,hl(o,i,n)),uo}function Eb(t,n,e,i,r,o,a){let s=!0,c=null;if((i.type&3||a)&&(c??=hl(i,n,o),ib(i,t,n,a,e,r,o,c)&&(s=!1)),s){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let h=0;h<d.length;h+=2){let m=d[h],f=d[h+1];c??=hl(i,n,o),_v(i,n,m,f,r,c)}if(l&&l.length)for(let h of l)c??=hl(i,n,o),_v(i,n,h,r,r,c)}}function he(t=1){return j_(t)}function s1(t,n){let e=null,i=WE(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?yy(t,o,!0):YE(i,o))return r}return e}function Ie(t){let n=Z()[_t][gt];if(!n.projection){let e=t?t.length:1,i=n.projection=l_(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?s1(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function q(t,n=0,e,i,r,o){let a=Z(),s=Re(),c=i?t+1:null;c!==null&&La(a,s,c,i,r,o,null,e);let l=ao(s,Ve+t,16,null,e||null);l.projection===null&&(l.projection=n),Vh();let h=!a[ar]||Nh();a[_t][gt].projection[l.projection]===null&&c!==null?c1(a,s,c):h&&!kl(l)&&gI(s,a,l)}function c1(t,n,e){let i=Ve+e,r=n.data[i],o=t[i],a=vl(o,r.tView.ssrId),s=Wa(t,r,void 0,{dehydratedView:a});Ga(o,s,0,no(r,a))}function at(t,n,e,i){return ub(t,n,e,i),at}function Te(t,n,e){return db(t,n,e),Te}function H(t){let n=Z(),e=Re(),i=Xc();Ea(i+1);let r=ff(e,i);if(t.dirty&&b_(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=mb(n,i);t.reset(o,Gv),t.notifyOnChanges()}return!0}return!1}function U(){return mf(Z(),Xc())}function $l(t,n,e,i,r){return pb(n,ub(t,e,i,r)),$l}function Wl(t,n,e,i){return pb(t,db(n,e,i)),Wl}function Gl(t=1){Ea(Xc()+t)}function Qa(t){let n=S_();return y_(n,Ve+t)}function sl(t,n){return t<<17|n<<2}function _r(t){return t>>17&32767}function l1(t){return(t&2)==2}function d1(t,n){return t&131071|n<<17}function jm(t){return t|2}function io(t){return(t&131068)>>2}function em(t,n){return t&-131069|n<<2}function u1(t){return(t&1)===1}function Bm(t){return t|1}function h1(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=_r(a),c=io(a);t[i]=e;let l=!1,d;if(Array.isArray(e)){let h=e;d=h[1],(d===null||Wr(h,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let m=_r(t[s+1]);t[i+1]=sl(m,s),m!==0&&(t[m+1]=em(t[m+1],i)),t[s+1]=d1(t[s+1],i)}else t[i+1]=sl(s,0),s!==0&&(t[s+1]=em(t[s+1],i)),s=i;else t[i+1]=sl(c,0),s===0?s=i:t[c+1]=em(t[c+1],i),c=i;l&&(t[i+1]=jm(t[i+1])),Iv(t,d,i,!0),Iv(t,d,i,!1),m1(n,d,t,i,o),a=sl(s,c),o?n.classBindings=a:n.styleBindings=a}function m1(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Wr(o,n)>=0&&(e[i+1]=Bm(e[i+1]))}function Iv(t,n,e,i){let r=t[e+1],o=n===null,a=i?_r(r):io(r),s=!1;for(;a!==0&&(s===!1||o);){let c=t[a],l=t[a+1];f1(c,n)&&(s=!0,t[a+1]=i?Bm(l):jm(l)),a=i?_r(l):io(l)}s&&(t[e+1]=i?jm(r):Bm(r))}function f1(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Wr(t,n)>=0:!1}var hn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function p1(t){return t.substring(hn.key,hn.keyEnd)}function g1(t){return _1(t),Ib(t,Mb(t,0,hn.textEnd))}function Ib(t,n){let e=hn.textEnd;return e===n?-1:(n=hn.keyEnd=v1(t,hn.key=n,e),Mb(t,n,e))}function _1(t){hn.key=0,hn.keyEnd=0,hn.value=0,hn.valueEnd=0,hn.textEnd=t.length}function Mb(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function v1(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Lt(t,n,e){return Sb(t,n,e,!1),Lt}function J(t,n){return Sb(t,n,null,!0),J}function It(t){b1(I1,y1,t,!0)}function y1(t,n){for(let e=g1(n);e>=0;e=Ib(n,e))$c(t,p1(n),!0)}function Sb(t,n,e,i){let r=Z(),o=Re(),a=Qc(2);if(o.firstUpdatePass&&kb(o,t,a,i),n!==wt&&Gt(r,a,n)){let s=o.data[En()];Ab(o,s,r,r[Ee],t,r[a+1]=S1(n,e),i,a)}}function b1(t,n,e,i){let r=Re(),o=Qc(2);r.firstUpdatePass&&kb(r,null,o,i);let a=Z();if(e!==wt&&Gt(a,o,e)){let s=r.data[En()];if(Rb(s,i)&&!Tb(r,o)){let c=i?s.classesWithoutHost:s.stylesWithoutHost;c!==null&&(e=Vc(c,e||"")),Vm(r,s,a,e,i)}else M1(r,s,a,a[Ee],a[o+1],a[o+1]=E1(t,n,e),i,o)}}function Tb(t,n){return n>=t.expandoStartIndex}function kb(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[En()],a=Tb(t,e);Rb(o,i)&&n===null&&!a&&(n=!1),n=w1(r,o,n,i),h1(r,o,n,e,a,i)}}function w1(t,n,e,i){let r=F_(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=tm(null,t,n,e,i),e=Va(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=tm(r,t,n,e,i),o===null){let c=D1(t,n,i);c!==void 0&&Array.isArray(c)&&(c=tm(null,t,n,c[1],i),c=Va(c,n.attrs,i),C1(t,n,i,c))}else o=x1(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function D1(t,n,e){let i=e?n.classBindings:n.styleBindings;if(io(i)!==0)return t[_r(i)]}function C1(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[_r(r)]=i}function x1(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=Va(i,a,e)}return Va(i,n.attrs,e)}function tm(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=Va(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function Va(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),$c(t,a,e?!0:n[++o]))}return t===void 0?null:t}function E1(t,n,e){if(e==null||e==="")return dt;let i=[],r=fn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function I1(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&$c(t,i,e)}function M1(t,n,e,i,r,o,a,s){r===wt&&(r=dt);let c=0,l=0,d=0<r.length?r[0]:null,h=0<o.length?o[0]:null;for(;d!==null||h!==null;){let m=c<r.length?r[c+1]:void 0,f=l<o.length?o[l+1]:void 0,p=null,D;d===h?(c+=2,l+=2,m!==f&&(p=h,D=f)):h===null||d!==null&&d<h?(c+=2,p=d):(l+=2,p=h,D=f),p!==null&&Ab(t,n,e,i,p,D,a,s),d=c<r.length?r[c]:null,h=l<o.length?o[l]:null}}function Ab(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let c=t.data,l=c[s+1],d=u1(l)?Mv(c,n,e,r,io(l),a):void 0;if(!Ml(d)){Ml(o)||l1(l)&&(o=Mv(c,null,e,r,s,a));let h=Eh(En(),e);vI(i,a,h,r,o)}}function Mv(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,h=d===null,m=e[r+1];m===wt&&(m=h?dt:void 0);let f=h?Wc(m,i):d===i?m:void 0;if(l&&!Ml(f)&&(f=Wc(c,i)),Ml(f)&&(s=f,a))return s;let p=t[r+1];r=a?_r(p):io(p)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(s=Wc(c,i))}return s}function Ml(t){return t!==void 0}function S1(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=va(fn(t)))),t}function Rb(t,n){return(t.flags&(n?8:16))!==0}function F(t,n=""){let e=Z(),i=Re(),r=t+Ve,o=i.firstCreatePass?ao(i,r,1,n,null):i.data[r],a=T1(i,e,o,n);e[r]=a,tl()&&sf(i,e,a,o),Qr(o,!1)}var T1=(t,n,e,i)=>(nl(!0),NE(n[Ee],i));function k1(t,n,e,i=""){return Gt(t,Gn(),e)?n+or(e)+i:wt}function A1(t,n,e,i,r,o=""){let a=k_(),s=fM(t,a,e,r);return Qc(2),s?n+or(e)+i+or(r)+o:wt}function Je(t){return Qt("",t),Je}function Qt(t,n,e){let i=Z(),r=k1(i,t,n,e);return r!==wt&&Nb(i,En(),r),Qt}function yr(t,n,e,i,r){let o=Z(),a=A1(o,t,n,e,i,r);return a!==wt&&Nb(o,En(),a),yr}function Nb(t,n,e){let i=Eh(n,t);OE(t[Ee],i,e)}function ho(t,n,e){vf(n)&&(n=n());let i=Z(),r=Gn();if(Gt(i,r,n)){let o=Re(),a=Ia();Ry(a,i,t,n,i[Ee],e)}return ho}function Ka(t,n){let e=vf(t);return e&&t.set(n),e}function mo(t,n){let e=Z(),i=Re(),r=Ke();return Eb(i,e,e[Ee],r,t,n),mo}function Xa(t){return Gt(Z(),Gn(),t)?or(t):wt}function Sv(t,n,e){let i=Re();i.firstCreatePass&&Ob(n,i.data,i.blueprint,ln(t),e)}function Ob(t,n,e,i,r){if(t=ze(t),Array.isArray(t))for(let o=0;o<t.length;o++)Ob(t[o],n,e,i,r);else{let o=Re(),a=Z(),s=Ke(),c=nr(t)?t:ze(t.provide),l=yh(t),d=s.providerIndexes&1048575,h=s.directiveStart,m=s.providerIndexes>>20;if(nr(t)||!t.multi){let f=new fr(l,r,ht,null),p=im(c,n,r?d:d+m,h);p===-1?(om(gl(s,a),o,c),nm(o,t,n.length),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(f),a.push(f)):(e[p]=f,a[p]=f)}else{let f=im(c,n,d+m,h),p=im(c,n,d,d+m),D=f>=0&&e[f],E=p>=0&&e[p];if(r&&!E||!r&&!D){om(gl(s,a),o,c);let S=O1(r?N1:R1,e.length,r,i,l,t);!r&&E&&(e[p].providerFactory=S),nm(o,t,n.length,0),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(S),a.push(S)}else{let S=Fb(e[r?p:f],l,!r&&i);nm(o,t,f>-1?f:p,S)}!r&&i&&E&&e[p].componentProviders++}}}function nm(t,n,e,i){let r=nr(n),o=p_(n);if(r||o){let c=(o?ze(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function Fb(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function im(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function R1(t,n,e,i,r){return Hm(this.multi,[])}function N1(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,c=Ra(i,i[W],this.providerFactory.index,r);a=c.slice(0,s),Hm(o,a);for(let l=s;l<c.length;l++)a.push(c[l])}else a=[],Hm(o,a);return a}function Hm(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function O1(t,n,e,i,r,o){let a=new fr(t,e,ht,null);return a.multi=[],a.index=n,a.componentProviders=0,Fb(a,r,i&&!e),a}function Ge(t,n){return e=>{e.providersResolver=(i,r)=>Sv(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>Sv(i,r?r(n):n,!0))}}function Cf(t,n){let e=T_()+t,i=Z();return i[e]===wt?hM(i,e,n()):mM(i,e)}function ql(t,n){return Vl(t,n)}var Sl=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},xf=(()=>{class t{compileModuleSync(e){return new xl(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=uh(e),o=_y(r.declarations).reduce((a,s)=>{let c=Hn(s);return c&&a.push(new gr(c)),a},[]);return new Sl(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Pb=(()=>{class t{applicationErrorHandler=u(Ot);appRef=u(Yt);taskService=u(qn);ngZone=u(O);zonelessEnabled=u(Sa);tracing=u(pn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new oe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ga):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(qh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?$_:zh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ga+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Lb(){return[{provide:Dn,useExisting:Pb},{provide:O,useClass:_a},{provide:Sa,useValue:!0}]}function F1(){return typeof $localize<"u"&&$localize.locale||Za}var fo=new _("",{factory:()=>u(fo,{optional:!0,skipSelf:!0})||F1()});var Ja=class{destroyed=!1;listeners=null;errorHandler=u(ut,{optional:!0});destroyRef=u(tt);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(n){if(this.destroyed)throw new C(953,!1);return(this.listeners??=[]).push(n),{unsubscribe:()=>{let e=this.listeners?.indexOf(n);e!==void 0&&e!==-1&&this.listeners?.splice(e,1)}}}emit(n){if(this.destroyed){console.warn(Cn(953,!1));return}if(this.listeners===null)return;let e=P(null);try{for(let i of this.listeners)try{i(n)}catch(r){this.errorHandler?.handleError(r)}}finally{P(e)}}};function Me(t){return Kg(t)}function gn(t,n){return ea(t,n?.equal)}var P1=t=>t;function Ef(t,n){if(typeof t=="function"){let e=Wu(t,P1,n?.equal);return Vb(e,n?.debugName)}else{let e=Wu(t.source,t.computation,t.equal);return Vb(e,t.debugName)}}function Vb(t,n){let e=t[Ne],i=t;return i.set=r=>Zg(e,r),i.update=r=>Qg(e,r),i.asReadonly=Ma.bind(t),i}var Zl=Symbol("InputSignalNode#UNSET"),Gb=ce(b({},ta),{transformFn:void 0,applyValueToInputSignal(t,n){ui(t,n)}});function qb(t,n){let e=Object.create(Gb);e.value=t,e.transformFn=n?.transform;function i(){if(Pn(e),e.value===Zl){let r=null;throw new C(-950,r)}return e.value}return i[Ne]=e,i}var kn=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Ba(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function Yb(t){return new Ja}function jb(t,n){return qb(t,n)}function J1(t){return qb(Zl,t)}var po=(jb.required=J1,jb);function Bb(t,n){return pf(n)}function eS(t,n){return gf(n)}var ts=(Bb.required=eS,Bb);function Hb(t,n){return pf(n)}function tS(t,n){return gf(n)}var Zb=(Hb.required=tS,Hb);function Qb(t,n){let e=Object.create(Gb),i=new Ja;e.value=t;function r(){return Pn(e),Ub(e.value),e.value}return r[Ne]=e,r.asReadonly=Ma.bind(r),r.set=o=>{e.equal(e.value,o)||(ui(e,o),i.emit(o))},r.update=o=>{Ub(e.value),r.set(o(e.value))},r.subscribe=i.subscribe.bind(i),r.destroyRef=i.destroyRef,r}function Ub(t){if(t===Zl)throw new C(952,!1)}function zb(t,n){return Qb(t,n)}function nS(t){return Qb(Zl,t)}var Kb=(zb.required=nS,zb);var Mf=new _(""),iS=new _("");function es(t){return!t.moduleRef}function rS(t){let n=es(t)?t.r3Injector:t.moduleRef.injector,e=n.get(O);return e.run(()=>{es(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Ot),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),es(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Mf);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Mf);a.add(o),t.moduleRef.onDestroy(()=>{Aa(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return aS(i,e,()=>{let o=n.get(qn),a=o.add(),s=n.get(wf);return s.runInitializers(),s.donePromise.then(()=>{let c=n.get(fo,Za);if(xb(c||Za),!n.get(iS,!0))return es(t)?n.get(Yt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(es(t)){let d=n.get(Yt);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return oS?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var oS;function aS(t,n,e){try{let i=e();return co(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Yl=null;function sS(t=[],n){return re.create({name:n,providers:[{provide:wa,useValue:"platform"},{provide:Mf,useValue:new Set([()=>Yl=null])},...t]})}function cS(t=[]){if(Yl)return Yl;let n=sS(t);return Yl=n,wb(),lS(n),n}function lS(t){let n=t.get(Tl,null);Qe(t,()=>{n?.forEach(e=>e())})}var dS=1e4;var iB=dS-1e3;var ke=(()=>{class t{static __NG_ELEMENT_ID__=uS}return t})();function uS(t){return hS(Ke(),Z(),(t&16)===16)}function hS(t,n,e){if(Wn(t)&&!e){let i=zt(t.index,n);return new Ei(i,i)}else if(t.type&175){let i=n[_t];return new Ei(i,n)}return null}function Xb(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;ve(de.BootstrapApplicationStart);try{let o=r?.injector??cS(i),a=[Lb(),G_,...e||[]],s=new Pa({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return rS({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{ve(de.BootstrapApplicationEnd)}}function Ce(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function ns(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var If=Symbol("NOT_SET"),Jb=new Set,mS=ce(b({},ta),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:If,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==If&&!Pr(this))return this.signal;try{for(let r of this.cleanup??Jb)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Ln(this),i;try{i=this.userFn.apply(null,n)}finally{li(this,e)}return(this.value===If||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Sf=class extends Na{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(tt),a),this.scheduler=r;for(let s of rf){let c=e[s];if(c===void 0)continue;let l=Object.create(mS);l.sequence=this,l.phase=s,l.userFn=c,l.dirty=!0,l.signal=()=>(Pn(l),l.value),l.signal[Ne]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[s]=l,this.hooks[s]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??Jb)e()}finally{di(n)}}};function e0(t,n){let e=n?.injector??u(re),i=e.get(Dn),r=e.get(Ol),o=e.get(pn,null,{optional:!0});r.impl??=e.get(of);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Kr,null,{optional:!0}),c=new Sf(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}function Ql(t,n){let e=Hn(t),i=n.elementInjector||Gr();return new gr(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var t0=null;function ti(){return t0}function Tf(t){t0??=t}var is=class{},Kl=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:()=>u(n0),providedIn:"platform"})}return t})();var n0=(()=>{class t extends Kl{_location;_history;_doc=u(V);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ti().getBaseHref(this._doc)}onPopState(e){let i=ti().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=ti().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function o0(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function i0(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Mi(t){return t&&t[0]!=="?"?`?${t}`:t}var go=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:()=>u(pS),providedIn:"root"})}return t})(),fS=new _(""),pS=(()=>{class t extends go{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(V).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return o0(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Mi(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Mi(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Mi(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(N(Kl),N(fS,8))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Si=(()=>{class t{_subject=new I;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=vS(i0(r0(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Mi(i))}normalize(e){return t.stripTrailingSlash(_S(this._basePath,r0(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Mi(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Mi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Mi;static joinWithSlash=o0;static stripTrailingSlash=i0;static \u0275fac=function(i){return new(i||t)(N(go))};static \u0275prov=g({token:t,factory:()=>gS(),providedIn:"root"})}return t})();function gS(){return new Si(N(go))}function _S(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function r0(t){return t.replace(/\/index.html$/,"")}function vS(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var kf=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(re);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(ht(ot))};static \u0275dir=k({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Se]})}return t})();function Xl(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var br=class{};var Af="browser",DS="server";function a0(t){return t===Af}function s0(t){return t===DS}var rs=class{_doc;constructor(n){this._doc=n}manager},Jl=(()=>{class t extends rs{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(N(V))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),nd=new _(""),Ff=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Jl));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Jl);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new C(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(N(nd),N(O))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),Rf="ng-app-id";function c0(t){for(let n of t)n.remove()}function l0(t,n){let e=n.createElement("style");return e.textContent=t,e}function xS(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Rf}="${n}"],link[${Rf}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Rf),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Of(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Pf=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,xS(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,l0);i?.forEach(r=>this.addUsage(r,this.external,Of))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(c0(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])c0(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,l0(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Of(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(N(V),N(Ii),N(oo,8),N(Qn))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),Nf={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Lf=/%COMP%/g;var u0="%COMP%",ES=`_nghost-${u0}`,IS=`_ngcontent-${u0}`,MS=!0,SS=new _("",{factory:()=>MS});function TS(t){return IS.replace(Lf,t)}function kS(t){return ES.replace(Lf,t)}function h0(t,n){return n.map(e=>e.replace(Lf,t))}var Vf=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,c=null,l=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=l,this.defaultRenderer=new os(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof td?r.applyToHost(e):r instanceof as&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.tracingService;switch(i.encapsulation){case mn.Emulated:o=new td(c,l,i,this.appId,d,a,s,h);break;case mn.ShadowDom:return new ed(c,e,i,a,s,this.nonce,h,l);case mn.ExperimentalIsolatedShadowDom:return new ed(c,e,i,a,s,this.nonce,h);default:o=new as(c,l,i,d,a,s,h);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(N(Ff),N(Pf),N(Ii),N(SS),N(V),N(O),N(oo),N(pn,8))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),os=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Nf[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(d0(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(d0(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new C(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Nf[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Nf[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(Sn.DashCase|Sn.Important)?n.style.setProperty(e,i,r&Sn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&Sn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=ti().getGlobalEventTarget(this.doc,n),!n))throw new C(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function d0(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var ed=class extends os{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,c){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=h0(i.id,l);for(let h of l){let m=document.createElement("style");a&&m.setAttribute("nonce",a),m.textContent=h,this.shadowRoot.appendChild(m)}let d=i.getExternalStyles?.();if(d)for(let h of d){let m=Of(h,r);a&&m.setAttribute("nonce",a),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},as=class extends os{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,c){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?h0(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&pr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},td=class extends as{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,c){let l=r+"-"+i.id;super(n,e,i,o,a,s,c,l),this.contentAttr=TS(l),this.hostAttr=kS(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var id=class t extends is{supportsDOMEvents=!0;static makeCurrent(){Tf(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=AS();return e==null?null:RS(e)}resetBaseElement(){ss=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Xl(document.cookie,n)}},ss=null;function AS(){return ss=ss||document.head.querySelector("base"),ss?ss.getAttribute("href"):null}function RS(t){return new URL(t,document.baseURI).pathname}var NS=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),m0=["alt","control","meta","shift"],OS={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},FS={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},f0=(()=>{class t extends rs{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ti().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),m0.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),a+=l+".")}),a+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,i){let r=OS[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),m0.forEach(a=>{if(a!==r){let s=FS[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(N(V))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();async function jf(t,n,e){let i=b({rootComponent:t},PS(n,e));return Xb(i)}function PS(t,n){return{platformRef:n?.platformRef,appProviders:[...HS,...t?.providers??[]],platformProviders:BS}}function LS(){id.makeCurrent()}function VS(){return new ut}function jS(){return $m(document),document}var BS=[{provide:Qn,useValue:Af},{provide:Tl,useValue:LS,multi:!0},{provide:V,useFactory:jS}];var HS=[{provide:wa,useValue:"root"},{provide:ut,useFactory:VS},{provide:nd,useClass:Jl,multi:!0},{provide:nd,useClass:f0,multi:!0},Vf,Pf,Ff,{provide:Xe,useExisting:Vf},{provide:br,useClass:NS},[]];var Ti=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Hf=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Uf=class{encodeKey(n){return p0(n)}encodeValue(n){return p0(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function US(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var zS=/%(\d[a-f0-9])/gi,$S={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function p0(t){return encodeURIComponent(t).replace(zS,(n,e)=>$S[e]??n)}function rd(t){return`${t}`}var ni=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Uf,n.fromString){if(n.fromObject)throw new C(2805,!1);this.map=US(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(rd):[rd(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(rd(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(rd(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function WS(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function g0(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function _0(t){return typeof Blob<"u"&&t instanceof Blob}function v0(t){return typeof FormData<"u"&&t instanceof FormData}function GS(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var y0="Content-Type",b0="Accept",w0="text/plain",D0="application/json",qS=`${D0}, ${w0}, */*`,_o=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(WS(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new C(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Ti,this.context??=new Hf,!this.params)this.params=new ni,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||g0(this.body)||_0(this.body)||v0(this.body)||GS(this.body)?this.body:this.body instanceof ni?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||v0(this.body)?null:_0(this.body)?this.body.type||null:g0(this.body)?null:typeof this.body=="string"?w0:this.body instanceof ni?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?D0:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,h=n.referrer||this.referrer,m=n.integrity||this.integrity,f=n.referrerPolicy||this.referrerPolicy,p=n.transferCache??this.transferCache,D=n.timeout??this.timeout,E=n.body!==void 0?n.body:this.body,S=n.withCredentials??this.withCredentials,fe=n.reportProgress??this.reportProgress,qe=n.headers||this.headers,Ye=n.params||this.params,Qo=n.context??this.context;return n.setHeaders!==void 0&&(qe=Object.keys(n.setHeaders).reduce((Ko,Hi)=>Ko.set(Hi,n.setHeaders[Hi]),qe)),n.setParams&&(Ye=Object.keys(n.setParams).reduce((Ko,Hi)=>Ko.set(Hi,n.setParams[Hi]),Ye)),new t(e,i,E,{params:Ye,headers:qe,context:Qo,reportProgress:fe,responseType:r,withCredentials:S,transferCache:p,keepalive:o,cache:s,priority:a,timeout:D,mode:c,redirect:l,credentials:d,referrer:h,integrity:m,referrerPolicy:f})}},wr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(wr||{}),cs=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Ti,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},zf=class t extends cs{constructor(n={}){super(n)}type=wr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},ls=class t extends cs{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=wr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},vo=class extends cs{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},YS=200,ZS=204;var QS=/^\)\]\}',?\n/;var KS=(()=>{class t{xhrFactory;tracingService=u(pn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new C(-2800,!1);let i=this.xhrFactory;return L(null).pipe(Et(()=>new K(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((E,S)=>a.setRequestHeader(E,S.join(","))),e.headers.has(b0)||a.setRequestHeader(b0,qS),!e.headers.has(y0)){let E=e.detectContentTypeHeader();E!==null&&a.setRequestHeader(y0,E)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let E=e.responseType.toLowerCase();a.responseType=E!=="json"?E:"text"}let s=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let E=a.statusText||"OK",S=new Ti(a.getAllResponseHeaders()),fe=a.responseURL||e.url;return c=new zf({headers:S,status:a.status,statusText:E,url:fe}),c},d=this.maybePropagateTrace(()=>{let{headers:E,status:S,statusText:fe,url:qe}=l(),Ye=null;S!==ZS&&(Ye=typeof a.response>"u"?a.responseText:a.response),S===0&&(S=Ye?YS:0);let Qo=S>=200&&S<300;if(e.responseType==="json"&&typeof Ye=="string"){let Ko=Ye;Ye=Ye.replace(QS,"");try{Ye=Ye!==""?JSON.parse(Ye):null}catch(Hi){Ye=Ko,Qo&&(Qo=!1,Ye={error:Hi,text:Ye})}}Qo?(o.next(new ls({body:Ye,headers:E,status:S,statusText:fe,url:qe||void 0})),o.complete()):o.error(new vo({error:Ye,headers:E,status:S,statusText:fe,url:qe||void 0}))}),h=this.maybePropagateTrace(E=>{let{url:S}=l(),fe=new vo({error:E,status:a.status||0,statusText:a.statusText||"Unknown Error",url:S||void 0});o.error(fe)}),m=h;e.timeout&&(m=this.maybePropagateTrace(E=>{let{url:S}=l(),fe=new vo({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:S||void 0});o.error(fe)}));let f=!1,p=this.maybePropagateTrace(E=>{f||(o.next(l()),f=!0);let S={type:wr.DownloadProgress,loaded:E.loaded};E.lengthComputable&&(S.total=E.total),e.responseType==="text"&&a.responseText&&(S.partialText=a.responseText),o.next(S)}),D=this.maybePropagateTrace(E=>{let S={type:wr.UploadProgress,loaded:E.loaded};E.lengthComputable&&(S.total=E.total),o.next(S)});return a.addEventListener("load",d),a.addEventListener("error",h),a.addEventListener("timeout",m),a.addEventListener("abort",h),e.reportProgress&&(a.addEventListener("progress",p),s!==null&&a.upload&&a.upload.addEventListener("progress",D)),a.send(s),o.next({type:wr.Sent}),()=>{a.removeEventListener("error",h),a.removeEventListener("abort",h),a.removeEventListener("load",d),a.removeEventListener("timeout",m),e.reportProgress&&(a.removeEventListener("progress",p),s!==null&&a.upload&&a.upload.removeEventListener("progress",D)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(N(br))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function XS(t,n){return n(t)}function JS(t,n,e){return(i,r)=>Qe(e,()=>n(i,o=>t(o,r)))}var eT=new _("",{factory:()=>[]}),C0=new _(""),tT=new _("",{factory:()=>!0});var nT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=N(KS),r},providedIn:"root"})}return t})();var iT=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Ta);contributeToStability=u(tT);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(eT),...this.injector.get(C0,[])]));this.chain=i.reduceRight((r,o)=>JS(r,o,this.injector),XS)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Xi(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(N(nT),N(we))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=N(iT),r},providedIn:"root"})}return t})();function Bf(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var $f=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof _o)o=e;else{let c;r.headers instanceof Ti?c=r.headers:c=new Ti(r.headers);let l;r.params&&(r.params instanceof ni?l=r.params:l=new ni({fromObject:r.params})),o=new _o(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=L(o).pipe(Qi(c=>this.handler.handle(c)));if(e instanceof _o||r.observe==="events")return a;let s=a.pipe(ue(c=>c instanceof ls));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(ne(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new C(2806,!1);return c.body}));case"blob":return s.pipe(ne(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new C(2807,!1);return c.body}));case"text":return s.pipe(ne(c=>{if(c.body!==null&&typeof c.body!="string")throw new C(2808,!1);return c.body}));default:return s.pipe(ne(c=>c.body))}case"response":return s;default:throw new C(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new ni().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Bf(r,i))}post(e,i,r={}){return this.request("POST",e,Bf(r,i))}put(e,i,r={}){return this.request("PUT",e,Bf(r,i))}static \u0275fac=function(i){return new(i||t)(N(rT))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var x0=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(N(V))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Wf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=N(aT),r},providedIn:"root"})}return t})(),aT=(()=>{class t extends Wf{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case it.NONE:return i;case it.HTML:return Kn(i,"HTML")?fn(i):Qm(this._doc,String(i)).toString();case it.STYLE:return Kn(i,"Style")?fn(i):i;case it.SCRIPT:if(Kn(i,"Script"))return fn(i);throw new C(5200,!1);case it.URL:return Kn(i,"URL")?fn(i):Ua(String(i));case it.RESOURCE_URL:if(Kn(i,"ResourceURL"))return fn(i);throw new C(5201,!1);default:throw new C(5202,!1)}}bypassSecurityTrustHtml(e){return Wm(e)}bypassSecurityTrustStyle(e){return Gm(e)}bypassSecurityTrustScript(e){return qm(e)}bypassSecurityTrustUrl(e){return Ym(e)}bypassSecurityTrustResourceUrl(e){return Zm(e)}static \u0275fac=function(i){return new(i||t)(N(V))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ee="primary",xs=Symbol("RouteTitle"),Qf=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Cr(t){return new Qf(t)}function Gf(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function R0(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return Gf(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Gf(o,t.slice(0,o.length),s)||!Gf(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function dd(t){return new Promise((n,e)=>{t.pipe(jn()).subscribe({next:i=>n(i),error:i=>e(i)})})}function sT(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Rn(t[e],n[e]))return!1;return!0}function Rn(t,n){let e=t?Kf(t):void 0,i=n?Kf(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!N0(t[r],n[r]))return!1;return!0}function Kf(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function N0(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function cT(t){return t.length>0?t[t.length-1]:null}function Ir(t){return sa(t)?t:co(t)?Ae(Promise.resolve(t)):L(t)}function O0(t){return sa(t)?dd(t):Promise.resolve(t)}var lT={exact:P0,subset:L0},F0={exact:dT,subset:uT,ignored:()=>!0},up={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ps={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function hp(t,n,e){let i=t instanceof Dt?t:n.parseUrl(t);return gn(()=>Xf(n.lastSuccessfulNavigation()?.finalUrl??new Dt,i,b(b({},ps),e)))}function Xf(t,n,e){return lT[e.paths](t.root,n.root,e.matrixParams)&&F0[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function dT(t,n){return Rn(t,n)}function P0(t,n,e){if(!Dr(t.segments,n.segments)||!sd(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!P0(t.children[i],n.children[i],e))return!1;return!0}function uT(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>N0(t[e],n[e]))}function L0(t,n,e){return V0(t,n,n.segments,e)}function V0(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Dr(r,e)||n.hasChildren()||!sd(r,e,i))}else if(t.segments.length===e.length){if(!Dr(t.segments,e)||!sd(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!L0(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Dr(t.segments,r)||!sd(t.segments,r,i)||!t.children[ee]?!1:V0(t.children[ee],n,o,i)}}function sd(t,n,e){return n.every((i,r)=>F0[e](t[r].parameters,i.parameters))}var Dt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new pe([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Cr(this.queryParams),this._queryParamMap}toString(){return fT.serialize(this)}},pe=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return cd(this)}},ki=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Cr(this.parameters),this._parameterMap}toString(){return B0(this)}};function hT(t,n){return Dr(t,n)&&t.every((e,i)=>Rn(e.parameters,n[i].parameters))}function Dr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function mT(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===ee&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==ee&&(e=e.concat(n(r,i)))}),e}var Mo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:()=>new Ai,providedIn:"root"})}return t})(),Ai=class{parse(n){let e=new ep(n);return new Dt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${ds(n.root,!0)}`,i=_T(n.queryParams),r=typeof n.fragment=="string"?`#${pT(n.fragment)}`:"";return`${e}${i}${r}`}},fT=new Ai;function cd(t){return t.segments.map(n=>B0(n)).join("/")}function ds(t,n){if(!t.hasChildren())return cd(t);if(n){let e=t.children[ee]?ds(t.children[ee],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==ee&&i.push(`${r}:${ds(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=mT(t,(i,r)=>r===ee?[ds(t.children[ee],!1)]:[`${r}:${ds(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[ee]!=null?`${cd(t)}/${e[0]}`:`${cd(t)}/(${e.join("//")})`}}function j0(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function od(t){return j0(t).replace(/%3B/gi,";")}function pT(t){return encodeURI(t)}function Jf(t){return j0(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ld(t){return decodeURIComponent(t)}function I0(t){return ld(t.replace(/\+/g,"%20"))}function B0(t){return`${Jf(t.path)}${gT(t.parameters)}`}function gT(t){return Object.entries(t).map(([n,e])=>`;${Jf(n)}=${Jf(e)}`).join("")}function _T(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${od(e)}=${od(r)}`).join("&"):`${od(e)}=${od(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var vT=/^[^\/()?;#]+/;function qf(t){let n=t.match(vT);return n?n[0]:""}var yT=/^[^\/()?;=#]+/;function bT(t){let n=t.match(yT);return n?n[0]:""}var wT=/^[^=?&#]+/;function DT(t){let n=t.match(wT);return n?n[0]:""}var CT=/^[^&#]+/;function xT(t){let n=t.match(CT);return n?n[0]:""}var ep=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new pe([],{}):new pe([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new C(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[ee]=new pe(e,i)),r}parseSegment(){let n=qf(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new C(4009,!1);return this.capture(n),new ki(ld(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=bT(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=qf(this.remaining);r&&(i=r,this.capture(i))}n[ld(e)]=ld(i)}parseQueryParam(n){let e=DT(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=xT(this.remaining);a&&(i=a,this.capture(i))}let r=I0(e),o=I0(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=qf(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new C(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=ee);let s=this.parseChildren(e+1);i[a??ee]=Object.keys(s).length===1&&s[ee]?s[ee]:new pe([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new C(4011,!1)}};function H0(t){return t.segments.length>0?new pe([],{[ee]:t}):t}function U0(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=U0(r);if(i===ee&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new pe(t.segments,n);return ET(e)}function ET(t){if(t.numberOfChildren===1&&t.children[ee]){let n=t.children[ee];return new pe(t.segments.concat(n.segments),n.children)}return t}function Ri(t){return t instanceof Dt}function z0(t,n,e=null,i=null,r=new Ai){let o=$0(t);return W0(o,n,e,i,r)}function $0(t){let n;function e(o){let a={};for(let c of o.children){let l=e(c);a[c.outlet]=l}let s=new pe(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=H0(i);return n??r}function W0(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Yf(o,o,o,e,i,r);let a=IT(n);if(a.toRoot())return Yf(o,o,new pe([],{}),e,i,r);let s=MT(a,o,t),c=s.processChildren?hs(s.segmentGroup,s.index,a.commands):q0(s.segmentGroup,s.index,a.commands);return Yf(o,s.segmentGroup,c,e,i,r)}function ud(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function gs(t){return typeof t=="object"&&t!=null&&t.outlets}function M0(t,n,e){t||="\u0275";let i=new Dt;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Yf(t,n,e,i,r,o){let a={};for(let[l,d]of Object.entries(i??{}))a[l]=Array.isArray(d)?d.map(h=>M0(l,h,o)):M0(l,d,o);let s;t===n?s=e:s=G0(t,n,e);let c=H0(U0(s));return new Dt(c,a,r)}function G0(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=G0(o,n,e)}),new pe(t.segments,i)}var hd=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&ud(i[0]))throw new C(4003,!1);let r=i.find(gs);if(r&&r!==cT(i))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function IT(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new hd(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,l])=>{s[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new hd(e,n,i)}var bo=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function MT(t,n,e){if(t.isAbsolute)return new bo(n,!0,0);if(!e)return new bo(n,!1,NaN);if(e.parent===null)return new bo(e,!0,0);let i=ud(t.commands[0])?0:1,r=e.segments.length-1+i;return ST(e,r,t.numberOfDoubleDots)}function ST(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new C(4005,!1);r=i.segments.length}return new bo(i,!1,r-o)}function TT(t){return gs(t[0])?t[0].outlets:{[ee]:t}}function q0(t,n,e){if(t??=new pe([],{}),t.segments.length===0&&t.hasChildren())return hs(t,n,e);let i=kT(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new pe(t.segments.slice(0,i.pathIndex),{});return o.children[ee]=new pe(t.segments.slice(i.pathIndex),t.children),hs(o,0,r)}else return i.match&&r.length===0?new pe(t.segments,{}):i.match&&!t.hasChildren()?tp(t,n,e):i.match?hs(t,0,r):tp(t,n,e)}function hs(t,n,e){if(e.length===0)return new pe(t.segments,{});{let i=TT(e),r={};if(Object.keys(i).some(o=>o!==ee)&&t.children[ee]&&t.numberOfChildren===1&&t.children[ee].segments.length===0){let o=hs(t.children[ee],n,e);return new pe(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=q0(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new pe(t.segments,r)}}function kT(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(gs(s))break;let c=`${s}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!T0(c,l,a))return o;i+=2}else{if(!T0(c,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function tp(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(gs(o)){let c=AT(o.outlets);return new pe(i,c)}if(r===0&&ud(e[0])){let c=t.segments[n];i.push(new ki(c.path,S0(e[0]))),r++;continue}let a=gs(o)?o.outlets[ee]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&ud(s)?(i.push(new ki(a,S0(s))),r+=2):(i.push(new ki(a,{})),r++)}return new pe(i,{})}function AT(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=tp(new pe([],{}),0,i))}),n}function S0(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function T0(t,n,e){return t==e.path&&Rn(n,e.parameters)}var ms="imperative",et=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(et||{}),jt=class{id;url;constructor(n,e){this.id=n,this.url=e}},xr=class extends jt{type=et.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},_n=class extends jt{urlAfterRedirects;type=et.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},mt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(mt||{}),_s=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(_s||{}),Kt=class extends jt{reason;code;type=et.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Y0(t){return t instanceof Kt&&(t.code===mt.Redirect||t.code===mt.SupersededByNewNavigation)}var ri=class extends jt{reason;code;type=et.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Er=class extends jt{error;target;type=et.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},vs=class extends jt{urlAfterRedirects;state;type=et.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},md=class extends jt{urlAfterRedirects;state;type=et.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fd=class extends jt{urlAfterRedirects;state;shouldActivate;type=et.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},pd=class extends jt{urlAfterRedirects;state;type=et.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gd=class extends jt{urlAfterRedirects;state;type=et.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},_d=class{route;type=et.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},vd=class{route;type=et.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},yd=class{snapshot;type=et.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},bd=class{snapshot;type=et.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},wd=class{snapshot;type=et.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Dd=class{snapshot;type=et.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Do=class{},ys=class{},Co=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function RT(t){return!(t instanceof Do)&&!(t instanceof Co)&&!(t instanceof ys)}var Cd=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new So(this.rootInjector)}},So=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Cd(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(N(we))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xd=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=np(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=np(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=ip(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return ip(n,this._root).map(e=>e.value)}};function np(t,n){if(t===n.value)return n;for(let e of n.children){let i=np(t,e);if(i)return i}return null}function ip(t,n){if(t===n.value)return[n];for(let e of n.children){let i=ip(t,e);if(i.length)return i.unshift(n),i}return[]}var Vt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function yo(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var bs=class extends xd{snapshot;constructor(n,e){super(n),this.snapshot=e,fp(this,n)}toString(){return this.snapshot.toString()}};function Z0(t,n){let e=NT(t,n),i=new Ue([new ki("",{})]),r=new Ue({}),o=new Ue({}),a=new Ue({}),s=new Ue(""),c=new oi(i,r,a,s,o,ee,t,e.root);return c.snapshot=e.root,new bs(new Vt(c,[]),e)}function NT(t,n){let e={},i={},r={},a=new xo([],e,r,"",i,ee,t,null,{},n);return new ws("",new Vt(a,[]))}var oi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(ne(l=>l[xs]))??L(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ne(n=>Cr(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ne(n=>Cr(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function mp(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:b(b({},n.params),t.params),data:b(b({},n.data),t.data),resolve:b(b(b(b({},t.data),n.data),r?.data),t._resolvedData)}:i={params:b({},t.params),data:b({},t.data),resolve:b(b({},t.data),t._resolvedData??{})},r&&K0(r)&&(i.resolve[xs]=r.title),i}var xo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[xs]}constructor(n,e,i,r,o,a,s,c,l,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Cr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Cr(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},ws=class extends xd{url;constructor(n,e){super(e),this.url=n,fp(this,e)}toString(){return Q0(this._root)}};function fp(t,n){n.value._routerState=t,n.children.forEach(e=>fp(t,e))}function Q0(t){let n=t.children.length>0?` { ${t.children.map(Q0).join(", ")} } `:"";return`${t.value}${n}`}function Zf(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Rn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Rn(n.params,e.params)||t.paramsSubject.next(e.params),sT(n.url,e.url)||t.urlSubject.next(e.url),Rn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function rp(t,n){let e=Rn(t.params,n.params)&&hT(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||rp(t.parent,n.parent))}function K0(t){return typeof t.title=="string"||t.title===null}var X0=new _(""),Es=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ee;activateEvents=new R;deactivateEvents=new R;attachEvents=new R;detachEvents=new R;routerOutletData=po();parentContexts=u(So);location=u(ot);changeDetector=u(ke);inputBinder=u(Sd,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new C(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new op(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Se]})}return t})(),op=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===oi?this.route:n===So?this.childContexts:n===X0?this.outletData:this.parent.get(n,e)}},Sd=new _("");var pp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&X(0,"router-outlet")},dependencies:[Es],encapsulation:2})}return t})();function gp(t){let n=t.children&&t.children.map(gp),e=n?ce(b({},t),{children:n}):b({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ee&&(e.component=pp),e}function OT(t,n,e){let i=Ds(t,n._root,e?e._root:void 0);return new bs(i,n)}function Ds(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=FT(t,n,e);return new Vt(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Ds(t,s)),a}}let i=PT(n.value),r=n.children.map(o=>Ds(t,o));return new Vt(i,r)}}function FT(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Ds(t,i,r);return Ds(t,i)})}function PT(t){return new oi(new Ue(t.url),new Ue(t.params),new Ue(t.queryParams),new Ue(t.fragment),new Ue(t.data),t.outlet,t.component,t)}var Eo=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},J0="ngNavigationCancelingError";function Ed(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Ri(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=ew(!1,mt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function ew(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[J0]=!0,e.cancellationCode=n,e}function LT(t){return tw(t)&&Ri(t.url)}function tw(t){return!!t&&t[J0]}var ap=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Zf(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=yo(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=yo(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=yo(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=yo(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Dd(o.value.snapshot))}),n.children.length&&this.forwardEvent(new bd(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Zf(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Zf(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},Id=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},wo=class{component;route;constructor(n,e){this.component=n,this.route=e}};function VT(t,n,e){let i=t._root,r=n?n._root:null;return us(i,r,e,[i.value])}function jT(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function To(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!oh(t)?t:n.get(t):i}function us(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=yo(n);return t.children.forEach(a=>{BT(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>fs(s,e.getContext(a),r)),r}function BT(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=HT(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Id(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?us(t,n,s?s.children:null,i,r):us(t,n,e,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new wo(s.outlet.component,a))}else a&&fs(n,s,r),r.canActivateChecks.push(new Id(i)),o.component?us(t,null,s?s.children:null,i,r):us(t,null,e,i,r);return r}function HT(t,n,e){if(typeof e=="function")return Qe(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Dr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Dr(t.url,n.url)||!Rn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!rp(t,n)||!Rn(t.queryParams,n.queryParams);default:return!rp(t,n)}}function fs(t,n,e){let i=yo(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?fs(a,n.children.getContext(o),e):fs(a,null,e):fs(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new wo(n.outlet.component,r)):e.canDeactivateChecks.push(new wo(null,r)):e.canDeactivateChecks.push(new wo(null,r))}function Is(t){return typeof t=="function"}function UT(t){return typeof t=="boolean"}function zT(t){return t&&Is(t.canLoad)}function $T(t){return t&&Is(t.canActivate)}function WT(t){return t&&Is(t.canActivateChild)}function GT(t){return t&&Is(t.canDeactivate)}function qT(t){return t&&Is(t.canMatch)}function nw(t){return t instanceof Zi||t?.name==="EmptyError"}var ad=Symbol("INITIAL_VALUE");function Io(){return Et(t=>ca(t.map(n=>n.pipe(lt(1),pt(ad)))).pipe(ne(n=>{for(let e of n)if(e!==!0){if(e===ad)return ad;if(e===!1||YT(e))return e}return!0}),ue(n=>n!==ad),lt(1)))}function YT(t){return Ri(t)||t instanceof Eo}function iw(t){return t.aborted?L(void 0).pipe(lt(1)):new K(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function rw(t){return Oe(iw(t))}function ZT(t){return ct(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?L(ce(b({},n),{guardsResult:!0})):QT(o,e,i).pipe(ct(a=>a&&UT(a)?KT(e,r,t):L(a)),ne(a=>ce(b({},n),{guardsResult:a})))})}function QT(t,n,e){return Ae(t).pipe(ct(i=>nk(i.component,i.route,e,n)),jn(i=>i!==!0,!0))}function KT(t,n,e){return Ae(n).pipe(Qi(i=>mi(JT(i.route.parent,e),XT(i.route,e),tk(t,i.path),ek(t,i.route))),jn(i=>i!==!0,!0))}function XT(t,n){return t!==null&&n&&n(new wd(t)),L(!0)}function JT(t,n){return t!==null&&n&&n(new yd(t)),L(!0)}function ek(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return L(!0);let i=e.map(r=>la(()=>{let o=n._environmentInjector,a=To(r,o),s=$T(a)?a.canActivate(n,t):Qe(o,()=>a(n,t));return Ir(s).pipe(jn())}));return L(i).pipe(Io())}function tk(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>jT(o)).filter(o=>o!==null).map(o=>la(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,l=To(s,c),d=WT(l)?l.canActivateChild(e,t):Qe(c,()=>l(e,t));return Ir(d).pipe(jn())});return L(a).pipe(Io())}));return L(r).pipe(Io())}function nk(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return L(!0);let o=r.map(a=>{let s=n._environmentInjector,c=To(a,s),l=GT(c)?c.canDeactivate(t,n,e,i):Qe(s,()=>c(t,n,e,i));return Ir(l).pipe(jn())});return L(o).pipe(Io())}function ik(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return L(!0);let a=o.map(s=>{let c=To(s,t),l=zT(c)?c.canLoad(n,e):Qe(t,()=>c(n,e)),d=Ir(l);return r?d.pipe(rw(r)):d});return L(a).pipe(Io(),ow(i))}function ow(t){return Vu(Ze(n=>{if(typeof n!="boolean")throw Ed(t,n)}),ne(n=>n===!0))}function rk(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return L(!0);let s=a.map(c=>{let l=To(c,t),d=qT(l)?l.canMatch(n,e,r):Qe(t,()=>l(n,e,r));return Ir(d).pipe(rw(o))});return L(s).pipe(Io(),ow(i))}var ii=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Cs=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function ok(t){throw new C(4e3,!1)}function ak(t){throw ew(!1,mt.GuardRejected)}var sp=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[ee])throw ok(`${n.redirectTo}`);r=r.children[ee]}}async applyRedirectCommands(n,e,i,r,o){let a=await sk(e,r,o);if(a instanceof Dt)throw new Cs(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Cs(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Dt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(n,c,i,r)}),new pe(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new C(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function sk(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return dd(Ir(Qe(e,()=>i(n))))}function ck(t,n){return t.providers&&!t._injector&&(t._injector=Ya(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Nn(t){return t.outlet||ee}function lk(t,n){let e=t.filter(i=>Nn(i)===n);return e.push(...t.filter(i=>Nn(i)!==n)),e}var cp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function aw(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function dk(t,n,e,i,r,o,a){let s=sw(t,n,e);if(!s.matched)return L(s);let c=aw(o(s));return i=ck(n,i),rk(i,n,e,r,c,a).pipe(ne(l=>l===!0?s:b({},cp)))}function sw(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?b({},cp):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||R0)(e,t,n);if(!r)return b({},cp);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?b(b({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function k0(t,n,e,i){return e.length>0&&mk(t,e,i)?{segmentGroup:new pe(n,hk(i,new pe(e,t.children))),slicedSegments:[]}:e.length===0&&fk(t,e,i)?{segmentGroup:new pe(t.segments,uk(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new pe(t.segments,t.children),slicedSegments:e}}function uk(t,n,e,i){let r={};for(let o of e)if(Td(t,n,o)&&!i[Nn(o)]){let a=new pe([],{});r[Nn(o)]=a}return b(b({},i),r)}function hk(t,n){let e={};e[ee]=n;for(let i of t)if(i.path===""&&Nn(i)!==ee){let r=new pe([],{});e[Nn(i)]=r}return e}function mk(t,n,e){return e.some(i=>Td(t,n,i)&&Nn(i)!==ee)}function fk(t,n,e){return e.some(i=>Td(t,n,i))}function Td(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function pk(t,n,e){return n.length===0&&!t.children[e]}var lp=class{};async function gk(t,n,e,i,r,o,a="emptyOnly",s){return new dp(t,n,e,i,r,a,o,s).recognize()}var _k=31,dp=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new sp(this.urlSerializer,this.urlTree)}noMatchError(n){return new C(4002,`'${n.segmentGroup}'`)}async recognize(){let n=k0(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Vt(i,e),o=new ws("",r),a=z0(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new xo([],Object.freeze({}),Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ee,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,ee,e),rootSnapshot:e}}catch(i){if(i instanceof Cs)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ii?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Vt?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let l=i.children[c],d=lk(e,c),h=await this.processSegmentGroup(n,d,l,c,r);a.push(...h)}let s=cw(a);return vk(s),s}async processSegment(n,e,i,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,a,s)}catch(l){if(l instanceof ii||nw(l))continue;throw l}if(pk(i,r,o))return new lp;throw new ii(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,c){if(Nn(i)!==a&&(a===ee||!Td(r,o,i)))throw new ii(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,c);throw new ii(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:h,remainingSegments:m}=sw(e,r,o);if(!c)throw new ii(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>_k&&(this.allowRedirects=!1));let f=this.createSnapshot(n,r,o,l,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let p=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,h,aw(f),n),D=await this.applyRedirects.lineralizeSegments(r,p);return this.processSegment(n,i,e,D.concat(m),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new xo(i,r,Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,bk(e),Nn(e),e.component??e._loadedComponent??null,e,wk(e),n),s=mp(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=qe=>this.createSnapshot(n,i,qe.consumedSegments,qe.parameters,a),c=await dd(dk(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new ii(e);n=i._injector??n;let{routes:l}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:h,consumedSegments:m,remainingSegments:f}=c,p=this.createSnapshot(n,i,m,h,a),{segmentGroup:D,slicedSegments:E}=k0(e,m,f,l);if(E.length===0&&D.hasChildren()){let qe=await this.processChildren(d,l,D,p);return new Vt(p,qe)}if(l.length===0&&E.length===0)return new Vt(p,[]);let S=Nn(i)===o,fe=await this.processSegment(d,l,D,E,S?ee:o,!0,p);return new Vt(p,fe instanceof Vt?[fe]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await dd(ik(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw ak(e)}return{routes:[],injector:n}}};function vk(t){t.sort((n,e)=>n.value.outlet===ee?-1:e.value.outlet===ee?1:n.value.outlet.localeCompare(e.value.outlet))}function yk(t){let n=t.value.routeConfig;return n&&n.path===""}function cw(t){let n=[],e=new Set;for(let i of t){if(!yk(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=cw(i.children);n.push(new Vt(i.value,r))}return n.filter(i=>!e.has(i))}function bk(t){return t.data||{}}function wk(t){return t.resolve||{}}function Dk(t,n,e,i,r,o,a){return ct(async s=>{let{state:c,tree:l}=await gk(t,n,e,i,s.extractedUrl,r,o,a);return ce(b({},s),{targetSnapshot:c,urlAfterRedirects:l})})}function Ck(t){return ct(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return L(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of lw(s))o.add(c);let a=0;return Ae(o).pipe(Qi(s=>r.has(s)?xk(s,e,t):(s.data=mp(s,s.parent,t).resolve,L(void 0))),Ze(()=>a++),Mc(1),ct(s=>a===o.size?L(n):Pe))})}function lw(t){let n=t.children.map(e=>lw(e)).flat();return[t,...n]}function xk(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!K0(i)&&(r[xs]=i.title),la(()=>(t.data=mp(t,t.parent,e).resolve,Ek(r,t,n).pipe(ne(o=>(t._resolvedData=o,t.data=b(b({},t.data),o),null)))))}function Ek(t,n,e){let i=Kf(t);if(i.length===0)return L({});let r={};return Ae(i).pipe(ct(o=>Ik(t[o],n,e).pipe(jn(),Ze(a=>{if(a instanceof Eo)throw Ed(new Ai,a);r[o]=a}))),Mc(1),ne(()=>r),fi(o=>nw(o)?Pe:aa(o)))}function Ik(t,n,e){let i=n._environmentInjector,r=To(t,i),o=r.resolve?r.resolve(n,e):Qe(i,()=>r(n,e));return Ir(o)}function A0(t){return Et(n=>{let e=t(n);return e?Ae(e).pipe(ne(()=>n)):L(n)})}var _p=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===ee);return i}getResolvedTitleForRoute(e){return e.data[xs]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:()=>u(dw),providedIn:"root"})}return t})(),dw=(()=>{class t extends _p{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(N(x0))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ko=new _("",{factory:()=>({})}),Ms=new _(""),uw=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(xf);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await O0(Qe(e,()=>i.loadComponent())),a=await fw(mw(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await hw(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function hw(t,n,e,i){let r=await O0(Qe(e,()=>t.loadChildren())),o=await fw(mw(r)),a;o instanceof Hl||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,c,l=!1,d;return Array.isArray(a)?(c=a,l=!0):(s=a.create(e).injector,d=a,c=s.get(Ms,[],{optional:!0,self:!0}).flat()),{routes:c.map(gp),injector:s,factory:d}}function Mk(t){return t&&typeof t=="object"&&"default"in t}function mw(t){return Mk(t)?t.default:t}async function fw(t){return t}var kd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:()=>u(Sk),providedIn:"root"})}return t})(),Sk=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pw=new _("");var Tk=()=>{},gw=new _(""),_w=(()=>{class t{currentNavigation=M(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=M(null);events=new I;transitionAbortWithErrorSubject=new I;configLoader=u(uw);environmentInjector=u(we);destroyRef=u(tt);urlSerializer=u(Mo);rootContexts=u(So);location=u(Si);inputBindingEnabled=u(Sd,{optional:!0})!==null;titleStrategy=u(_p);options=u(ko,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(kd);createViewTransition=u(pw,{optional:!0});navigationErrorHandler=u(gw,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>L(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new _d(r)),i=r=>this.events.next(new vd(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Me(()=>{this.transitions?.next(ce(b({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ue(null),this.transitions.pipe(ue(i=>i!==null),Et(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return L(i).pipe(Et(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",mt.SupersededByNewNavigation),Pe;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?ce(b({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&d!=="reload")return this.events.next(new ri(s.id,this.urlSerializer.serialize(s.rawUrl),"",_s.IgnoredSameUrlNavigation)),s.resolve(!1),Pe;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return L(s).pipe(Et(h=>(this.events.next(new xr(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?Pe:Promise.resolve(h))),Dk(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Ze(h=>{i.targetSnapshot=h.targetSnapshot,i.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=h.urlAfterRedirects,m)),this.events.next(new ys)}),Et(h=>Ae(i.routesRecognizeHandler.deferredHandle??L(void 0)).pipe(ne(()=>h))),Ze(()=>{let h=new vs(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:h,extractedUrl:m,source:f,restoredState:p,extras:D}=s,E=new xr(h,this.urlSerializer.serialize(m),f,p);this.events.next(E);let S=Z0(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=ce(b({},s),{targetSnapshot:S,urlAfterRedirects:m,extras:ce(b({},D),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(fe=>(fe.finalUrl=m,fe)),L(i)}else return this.events.next(new ri(s.id,this.urlSerializer.serialize(s.extractedUrl),"",_s.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Pe}),ne(s=>{let c=new md(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=ce(b({},s),{guards:VT(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),ZT(s=>this.events.next(s)),Et(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Ed(this.urlSerializer,s.guardsResult);let c=new fd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return Pe;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",mt.GuardRejected),Pe;if(s.guards.canActivateChecks.length===0)return L(s);let l=new pd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!a())return Pe;let d=!1;return L(s).pipe(Ck(this.paramsInheritanceStrategy),Ze({next:()=>{d=!0;let h=new gd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)},complete:()=>{d||this.cancelNavigationTransition(s,"",mt.NoDataFromResolver)}}))}),A0(s=>{let c=d=>{let h=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let m=d._environmentInjector;h.push(this.configLoader.loadComponent(m,d.routeConfig).then(f=>{d.component=f}))}for(let m of d.children)h.push(...c(m));return h},l=c(s.targetSnapshot.root);return l.length===0?L(s):Ae(Promise.all(l).then(()=>s))}),A0(()=>this.afterPreactivation()),Et(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?Ae(l).pipe(ne(()=>i)):L(i)}),lt(1),Et(s=>{let c=OT(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=ce(b({},s),{targetRouterState:c}),this.currentNavigation.update(d=>(d.targetRouterState=c,d)),this.events.next(new Do);let l=i.beforeActivateHandler.deferredHandle;return l?Ae(l.then(()=>s)):L(s)}),Ze(s=>{new ap(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=Tk,c)),this.lastSuccessfulNavigation.set(Me(this.currentNavigation)),this.events.next(new _n(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Oe(iw(o.signal).pipe(ue(()=>!r&&!i.targetRouterState),Ze(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",mt.Aborted)}))),Ze({complete:()=>{r=!0}}),Oe(this.transitionAbortWithErrorSubject.pipe(Ze(s=>{throw s}))),Xi(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",mt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),fi(s=>{if(r=!0,this.destroyed)return i.resolve(!1),Pe;if(tw(s))this.events.next(new Kt(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),LT(s)?this.events.next(new Co(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new Er(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let l=Qe(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof Eo){let{message:d,cancellationCode:h}=Ed(this.urlSerializer,l);this.events.next(new Kt(i.id,this.urlSerializer.serialize(i.extractedUrl),d,h)),this.events.next(new Co(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return Pe}))}))}cancelNavigationTransition(e,i,r){let o=new Kt(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Me(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function kk(t){return t!==ms}var vw=new _("");var yw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:()=>u(Ak),providedIn:"root"})}return t})(),Md=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},Ak=(()=>{class t extends Md{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ad=(()=>{class t{urlSerializer=u(Mo);options=u(ko,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Si);urlHandlingStrategy=u(kd);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Dt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof Dt?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=Z0(null,u(we));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:()=>u(Rk),providedIn:"root"})}return t})(),Rk=(()=>{class t extends Ad{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof xr?this.updateStateMemento():e instanceof ri?this.commitTransition(i):e instanceof vs?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Do?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Kt&&!Y0(e)?this.restoreHistory(i):e instanceof Er?this.restoreHistory(i,!0):e instanceof _n&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:o,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,c=b(b({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",c)}else{let s=b(b({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function vp(t,n){t.events.pipe(ue(e=>e instanceof _n||e instanceof Kt||e instanceof Er||e instanceof ri),ne(e=>e instanceof _n||e instanceof ri?0:(e instanceof Kt?e.code===mt.Redirect||e.code===mt.SupersededByNewNavigation:!1)?2:1),ue(e=>e!==2),lt(1)).subscribe(()=>{n()})}var Mr=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(Ul);stateManager=u(Ad);options=u(ko,{optional:!0})||{};pendingTasks=u(qn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(_w);urlSerializer=u(Mo);location=u(Si);urlHandlingStrategy=u(kd);injector=u(we);_events=new I;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(yw);injectorCleanup=u(vw,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Ms,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Sd,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new oe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Me(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Kt&&i.code!==mt.Redirect&&i.code!==mt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof _n)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Co){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=b({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||kk(r.source)},a);this.scheduleNavigation(s,ms,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}RT(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ms,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null;if(r){let c=b({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let s=this.parseUrl(e);this.scheduleNavigation(s,i,a,o).catch(c=>{this.disposed||this.injector.get(Ot)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Me(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(gp),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=b(b({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let m=r?r.snapshot:this.routerState.snapshot.root;h=$0(m)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return W0(h,e,d,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Ri(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,ms,null,i)}navigate(e,i={skipLocationChange:!1}){return Nk(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Cn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=b({},up):i===!1?r=b({},ps):r=b(b({},ps),i),Ri(e))return Xf(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Xf(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,l;a?(s=a.resolve,c=a.reject,l=a.promise):l=new Promise((h,m)=>{s=h,c=m});let d=this.pendingTasks.add();return vp(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Nk(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new C(4008,!1)}var Fk=(()=>{class t{router=u(Mr);stateManager=u(Ad);fragment=M("");queryParams=M({});path=M("");serializer=u(Mo);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof _n&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Dt(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ao=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new kn("href"),{optional:!0});reactiveHref=Ef(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Me(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Me(this._target)}_target=M(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Me(this._queryParams)}_queryParams=M(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Me(this._fragment)}_fragment=M(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Me(this._queryParamsHandling)}_queryParamsHandling=M(void 0);set state(e){this._state.set(e)}get state(){return Me(this._state)}_state=M(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Me(this._info)}_info=M(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Me(this._relativeTo)}_relativeTo=M(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Me(this._preserveFragment)}_preserveFragment=M(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Me(this._skipLocationChange)}_skipLocationChange=M(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Me(this._replaceUrl)}_replaceUrl=M(!1);isAnchorElement;onChanges=new I;applicationErrorHandler=u(Ot);options=u(ko,{optional:!0});reactiveRouterState=u(Fk);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=M(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Ri(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=gn(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Ri(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return Me(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(ht(Mr),ht(oi),Ba("tabindex"),ht(je),ht(j),ht(go))};static \u0275dir=k({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&De("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&le("href",r.reactiveHref(),Km)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Ce],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Ce],replaceUrl:[2,"replaceUrl","replaceUrl",Ce],routerLink:"routerLink"},features:[Se]})}return t})(),yp=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new R;link=u(Ao,{optional:!0});constructor(e,i,r,o){this.router=e,this.element=i,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof _n&&this.update()})}ngAfterContentInit(){L(this.links.changes,L(null)).pipe(hi()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=Ae(e).pipe(hi()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(e){let i=Array.isArray(e)?e:e.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(i=>{e?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let i=Pk(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?b({},up):b({},ps);return r=>{let o=r.urlTree;return o?Me(hp(o,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(i){return new(i||t)(ht(Mr),ht(j),ht(je),ht(ke))};static \u0275dir=k({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,o){if(i&1&&at(o,Ao,5),i&2){let a;H(a=U())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Se]})}return t})();function Pk(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Lk=new _("");function bp(t,...n){return Rt([{provide:Ms,multi:!0,useValue:t},[],{provide:oi,useFactory:Vk},{provide:zl,multi:!0,useFactory:jk},n.map(e=>e.\u0275providers)])}function Vk(){return u(Mr).routerState.root}function jk(){let t=u(re);return n=>{let e=t.get(Yt);if(n!==e.components[0])return;let i=t.get(Mr),r=t.get(Bk);t.get(Hk)===1&&i.initialNavigation(),t.get(Uk,null,{optional:!0})?.setUpPreloading(),t.get(Lk,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Bk=new _("",{factory:()=>new I}),Hk=new _("",{factory:()=>1});var Uk=new _("");var bw=new _("HIGHCHARTS_LOADER"),ww=new _("HIGHCHARTS_ROOT_MODULES"),Dw=new _("HIGHCHARTS_OPTIONS"),zk=new _("HIGHCHARTS_CONFIG"),Cw=new _("HIGHCHARTS_TIMEOUT"),$k=(()=>{class t{constructor(){this.highcharts=M(null),this.loader=u(bw),this.globalOptions=u(Dw,{optional:!0}),this.globalModules=u(ww,{optional:!0})}async loadHighchartsWithModules(e){let i=await this.loader();return await Promise.allSettled([...this.globalModules?.()??[],...e?.modules?.()??[]]),i}load(e){this.loadHighchartsWithModules(e).then(i=>{this.globalOptions&&i.setOptions(this.globalOptions),this.highcharts.set(i)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Wk=(()=>{class t{delay(e){return new Promise(i=>setTimeout(i,e))}keepChartUpToDate(){Yn(async()=>{let e=this.update(),i=this.oneToOne(),r=this.options();this._chartInstance=await this.chart(),this.chartCreated?e&&this._chartInstance?.update(r,!0,i):this._chartInstance&&(this.chartCreated=!0)})}constructor(){this.constructorType=po("chart"),this.oneToOne=po(!1),this.options=po.required(),this.update=Kb(!0),this.chartInstance=Yb(),this.destroyRef=u(tt),this.el=u(j),this.platformId=u(Qn),this.relativeConfig=u(zk,{optional:!0}),this.timeout=u(Cw,{optional:!0}),this.highchartsChartService=u($k),this.chartCreated=!1,this.chart=gn(async()=>{let e=this.highchartsChartService.highcharts(),i=this.constructorType();if(await this.delay(this.relativeConfig?.timeout??this.timeout??500),!e)return;let r=a=>this.chartInstance.emit(a);return{chart:e.chart,ganttChart:e.ganttChart,mapChart:e.mapChart,stockChart:e.stockChart}[i](this.el.nativeElement,Me(()=>this.options()),r)}),!(this.platformId&&s0(this.platformId))&&(this.highchartsChartService.load(this.relativeConfig),this.destroyRef.onDestroy(()=>{this._chartInstance?.destroy(),this._chartInstance=void 0}),this.keepChartUpToDate())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=k({type:t,selectors:[["","highchartsChart",""]],inputs:{constructorType:[1,"constructorType"],oneToOne:[1,"oneToOne"],options:[1,"options"],update:[1,"update"]},outputs:{update:"updateChange",chartInstance:"chartInstance"}})}}return t})(),xw=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=x({type:t,selectors:[["highcharts-chart"]],features:[_f([{directive:Wk,inputs:["constructorType","constructorType","oneToOne","oneToOne","options","options","update","update"],outputs:["chartInstance","chartInstance","updateChange","updateChange"]}])],decls:0,vars:0,template:function(i,r){},encapsulation:2,changeDetection:0})}}return t})(),Gk=()=>[],qk=()=>import("./chunk-7WUFJMZC.js").then(t=>t.default);function Yk(t){return Rt([{provide:bw,useValue:t??qk}])}function Zk(t){return Rt([{provide:Dw,useValue:t}])}function Qk(t){return Rt([{provide:ww,useValue:t}])}function Ew(t={}){let n=[Yk(t.instance),Qk(t.modules??Gk),{provide:Cw,useValue:t.timeout}];return t.options&&n.push(Zk(t.options)),Rt(n)}var Kk=new _("cdk-dir-doc",{providedIn:"root",factory:()=>u(V)}),Xk=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Iw(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Xk.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Xt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=M("ltr");change=new R;constructor(){let e=u(Kk,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Iw(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ge=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();var Jk=["*"];var eA=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],tA=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],nA=new _("MAT_CARD_CONFIG"),On=(()=>{class t{appearance;constructor(){let e=u(nA,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&J("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Jk,decls:1,vars:0,template:function(i,r){i&1&&(Ie(),q(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),Ro=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var Ni=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var No=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:tA,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Ie(eA),q(0),A(1,"div",0),q(2,1),B(),q(3,2))},encapsulation:2,changeDetection:0})}return t})();var Jt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ge]})}return t})();function ai(t,n=0){return Mw(t)?Number(t):arguments.length===2?n:0}function Mw(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function en(t){return t instanceof j?t.nativeElement:t}function Oo(t){return Array.isArray(t)?t:[t]}function Be(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Mt(t){return t!=null&&`${t}`!="false"}var wp;try{wp=typeof Intl<"u"&&Intl.v8BreakIterator}catch{wp=!1}var me=(()=>{class t{_platformId=u(Qn);isBrowser=this._platformId?a0(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||wp)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Sr;function Sw(){if(Sr==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Sr=!1,Sr;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Sr=!0;else{let t=Element.prototype.scrollTo;t?Sr=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Sr=!1}}return Sr}var Dp;function Tw(){if(Dp==null){let t=typeof document<"u"?document.head:null;Dp=!!(t&&(t.createShadowRoot||t.attachShadow))}return Dp}function Cp(t){if(Tw()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Fo(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function St(t){return t.composedPath?t.composedPath()[0]:t.target}function xp(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ts;function kw(){if(Ts==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ts=!0}))}finally{Ts=Ts||!1}return Ts}function Po(t){return kw()?t:!!t.capture}var Rd=new WeakMap,He=(()=>{class t{_appRef;_injector=u(re);_environmentInjector=u(we);load(e){let i=this._appRef=this._appRef||this._injector.get(Yt),r=Rd.get(i);r||(r={loaders:new Set,refs:[]},Rd.set(i,r),i.onDestroy(()=>{Rd.get(i)?.refs.forEach(o=>o.destroy()),Rd.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Ql(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Oi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Nd;function iA(){if(Nd===void 0&&(Nd=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Nd=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Nd}function Lo(t){return iA()?.createHTML(t)||t}function ks(t){return t.buttons===0||t.detail===0}function As(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Aw=new _("cdk-input-modality-detector-options"),Rw={ignoreKeys:[18,17,224,91,16]},Nw=650,Ep={passive:!0,capture:!0},Ow=(()=>{class t{_platform=u(me);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ue(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=St(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Nw||(this._modality.next(ks(e)?"keyboard":"mouse"),this._mostRecentTarget=St(e))};_onTouchstart=e=>{if(As(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=St(e)};constructor(){let e=u(O),i=u(V),r=u(Aw,{optional:!0});if(this._options=b(b({},Rw),r),this.modalityDetected=this._modality.pipe(ua(1)),this.modalityChanged=this.modalityDetected.pipe(Ic()),this._platform.isBrowser){let o=u(Xe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Ep),o.listen(i,"mousedown",this._onMousedown,Ep),o.listen(i,"touchstart",this._onTouchstart,Ep)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rs=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Rs||{}),Fw=new _("cdk-focus-monitor-default-options"),Od=Po({passive:!0,capture:!0}),Fi=(()=>{class t{_ngZone=u(O);_platform=u(me);_inputModalityDetector=u(Ow);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(V);_stopInputModalityDetector=new I;constructor(){let e=u(Fw,{optional:!0});this._detectionMode=e?.detectionMode||Rs.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=St(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=en(e);if(!this._platform.isBrowser||r.nodeType!==1)return L();let o=Cp(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new I,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=en(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=en(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Rs.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Rs.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Nw:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=St(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Od),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Od)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Oe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Od),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Od),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ip=(()=>{class t{_elementRef=u(j);_focusMonitor=u(Fi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new R;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Pw=new Set,Tr,Vo=(()=>{class t{_platform=u(me);_nonce=u(oo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):oA}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&rA(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function rA(t,n){if(!Pw.has(t))try{Tr||(Tr=document.createElement("style"),n&&Tr.setAttribute("nonce",n),Tr.setAttribute("type","text/css"),document.head.appendChild(Tr)),Tr.sheet&&(Tr.sheet.insertRule(`@media ${t} {body{ }}`,0),Pw.add(t))}catch(e){console.error(e)}}function oA(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Mp=(()=>{class t{_mediaMatcher=u(Vo);_zone=u(O);_queries=new Map;_destroySubject=new I;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Lw(Oo(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Lw(Oo(e)).map(a=>this._registerQuery(a).observable),o=ca(r);return o=mi(o.pipe(lt(1)),o.pipe(ua(1),Ki(0))),o.pipe(ne(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:l})=>{s.matches=s.matches||c,s.breakpoints[l]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new K(a=>{let s=c=>this._zone.run(()=>a.next(c));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(pt(i),ne(({matches:a})=>({query:e,matches:a})),Oe(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Lw(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function aA(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var Vw=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jw=(()=>{class t{_mutationObserverFactory=u(Vw);_observedElements=new Map;_ngZone=u(O);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=en(e);return new K(r=>{let a=this._observeElement(i).pipe(ne(s=>s.filter(c=>!aA(c))),ue(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new I,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Bw=(()=>{class t{_contentObserver=u(jw);_elementRef=u(j);event=new R;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=ai(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Ki(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",Ce],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),jo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[Vw]})}return t})();var sA=(()=>{class t{_platform=u(me);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return lA(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=cA(_A(e));if(i&&(Hw(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=Hw(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!pA(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return gA(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cA(t){try{return t.frameElement}catch{return null}}function lA(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function dA(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function uA(t){return mA(t)&&t.type=="hidden"}function hA(t){return fA(t)&&t.hasAttribute("href")}function mA(t){return t.nodeName.toLowerCase()=="input"}function fA(t){return t.nodeName.toLowerCase()=="a"}function $w(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function Hw(t){if(!$w(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function pA(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function gA(t){return uA(t)?!1:dA(t)||hA(t)||t.hasAttribute("contenteditable")||$w(t)}function _A(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Tp=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?rt(n,{injector:this._injector}):setTimeout(n)}},Ww=(()=>{class t{_checker=u(sA);_ngZone=u(O);_document=u(V);_injector=u(re);constructor(){u(He).load(Oi)}create(e,i=!1){return new Tp(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),kp=(()=>{class t{_elementRef=u(j);_focusTrapFactory=u(Ww);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){u(me).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let i=e.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Fo(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",Ce],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",Ce]},exportAs:["cdkTrapFocus"],features:[Se]})}return t})();var Pi=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(Pi||{}),Uw="cdk-high-contrast-black-on-white",zw="cdk-high-contrast-white-on-black",Sp="cdk-high-contrast-active",Gw=(()=>{class t{_platform=u(me);_hasCheckedHighContrastMode=!1;_document=u(V);_breakpointSubscription;constructor(){this._breakpointSubscription=u(Mp).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Pi.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Pi.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Pi.BLACK_ON_WHITE}return Pi.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Sp,Uw,zw),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Pi.BLACK_ON_WHITE?e.add(Sp,Uw):i===Pi.WHITE_ON_BLACK&&e.add(Sp,zw)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ap=(()=>{class t{constructor(){u(Gw)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[jo]})}return t})();var vA=200,Fd=class{_letterKeyStream=new I;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new I;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:vA;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Ze(e=>this._pressedLetters.push(e)),Ki(n),ue(()=>this._pressedLetters.length>0),ne(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Li(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Pd=class{_items;_activeItemIndex=M(-1);_activeItem=M(null);_wrap=!1;_typeaheadSubscription=oe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Mn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):so(n)&&(this._effectRef=Yn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new I;change=new I;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Fd(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Li(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return so(this._items)?this._items():this._items instanceof Mn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Ns=class extends Pd{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Rp={},ft=class t{_appId=u(Ii);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Rp.hasOwnProperty(n)||(Rp[n]=0),`${n}${e?t._infix+"-":""}${Rp[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})};var Yw=" ";function yA(t,n,e){let i=Gd(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(Yw)))}function bA(t,n,e){let i=Gd(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(Yw)):t.removeAttribute(n)}function Gd(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var Zw="cdk-describedby-message",Wd="cdk-describedby-host",Op=0,Qw=(()=>{class t{_platform=u(me);_document=u(V);_messageRegistry=new Map;_messagesContainer=null;_id=`${Op++}`;constructor(){u(He).load(Oi),this._id=u(Ii)+"-"+Op++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=Np(i,r);typeof i!="string"?(qw(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=Np(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Wd}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(Wd);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");qw(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Np(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=Gd(e,"aria-describedby").filter(r=>r.indexOf(Zw)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);yA(e,"aria-describedby",r.messageElement.id),e.setAttribute(Wd,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,bA(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Wd)}_isElementDescribedByMessage(e,i){let r=Gd(e,"aria-describedby"),o=this._messageRegistry.get(i),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Np(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function qw(t,n){t.id||(t.id=`${Zw}-${n}-${Op++}`)}var wA=new _("MATERIAL_ANIMATIONS"),Kw=null;function DA(){return u(wA,{optional:!0})?.animationsDisabled||u(Ha,{optional:!0})==="NoopAnimations"?"di-disabled":(Kw??=u(Vo).matchMedia("(prefers-reduced-motion)").matches,Kw?"reduced-motion":"enabled")}function Ct(){return DA()!=="enabled"}var tn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(tn||{}),Fp=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=tn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Xw=Po({passive:!0,capture:!0}),Pp=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Xw)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Xw)))}_delegateEventHandler=n=>{let e=St(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Os={enterDuration:225,exitDuration:150},CA=800,Jw=Po({passive:!0,capture:!0}),eD=["mousedown","touchstart"],tD=["mouseup","mouseleave","touchend","touchcancel"],xA=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Bo=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Pp;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=en(i)),o&&o.get(He).load(xA)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=b(b({},Os),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||EA(n,e,r),s=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${c-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let h=window.getComputedStyle(d),m=h.transitionProperty,f=h.transitionDuration,p=m==="none"||f==="0s"||f==="0s, 0s"||r.width===0&&r.height===0,D=new Fp(this,d,i,p);d.style.transform="scale3d(1, 1, 1)",D.state=tn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=D);let E=null;return!p&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let S=()=>{E&&(E.fallbackTimer=null),clearTimeout(qe),this._finishRippleTransition(D)},fe=()=>this._destroyRipple(D),qe=setTimeout(fe,l+100);d.addEventListener("transitionend",S),d.addEventListener("transitioncancel",fe),E={onTransitionEnd:S,onTransitionCancel:fe,fallbackTimer:qe}}),this._activeRipples.set(D,E),(p||!l)&&this._finishRippleTransition(D),D}fadeOutRipple(n){if(n.state===tn.FADING_OUT||n.state===tn.HIDDEN)return;let e=n.element,i=b(b({},Os),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=tn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=en(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,eD.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{tD.forEach(e=>{this._triggerElement.addEventListener(e,this,Jw)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===tn.FADING_IN?this._startFadeOutTransition(n):n.state===tn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=tn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=tn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ks(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+CA;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!As(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===tn.VISIBLE||n.config.terminateOnPointerUp&&n.state===tn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(eD.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(tD.forEach(e=>n.removeEventListener(e,this,Jw)),this._pointerUpEventsRegistered=!1))}};function EA(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var qd=new _("mat-ripple-global-options");var Vi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Fs=(()=>{class t{_listeners=[];notify(e,i){for(let r of this._listeners)r(e,i)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(i=>e!==i)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Lp=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Mt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Mt(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(le("aria-orientation",r.vertical?"vertical":"horizontal"),J("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return t})(),Ho=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ge]})}return t})();var nD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ge]})}return t})();var Uo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ge]})}return t})();var IA=["*"],MA=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,SA=["unscopedContent"],TA=["text"],kA=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],AA=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var RA=new _("ListOption"),NA=(()=>{class t{_elementRef=u(j);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),OA=(()=>{class t{_elementRef=u(j);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),FA=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),iD=(()=>{class t{_listOption=u(RA,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,hostVars:4,hostBindings:function(i,r){i&2&&J("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),PA=(()=>{class t extends iD{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=k({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[We]})}return t})(),LA=(()=>{class t extends iD{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=k({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[We]})}return t})(),VA=new _("MAT_LIST_CONFIG"),Vp=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Mt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Mt(e))}_disabled=M(!1);_defaultOptions=u(VA,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,hostVars:1,hostBindings:function(i,r){i&2&&le("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),jA=(()=>{class t{_elementRef=u(j);_ngZone=u(O);_listBase=u(Vp,{optional:!0});_platform=u(me);_hostElement;_isButtonElement;_noopAnimations=Ct();_avatars;_icons;set lines(e){this._explicitLines=ai(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Mt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Mt(e))}_disabled=M(!1);_subscriptions=new oe;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(He).load(Vi);let e=u(qd,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Bo(this,this._ngZone,this._hostElement,this._platform,u(re)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(bn(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,contentQueries:function(i,r,o){if(i&1&&at(o,PA,4)(o,LA,4),i&2){let a;H(a=U())&&(r._avatars=a),H(a=U())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(le("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),J("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var rD=(()=>{class t extends Vp{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[Ge([{provide:Vp,useExisting:t}]),We],ngContentSelectors:IA,decls:1,vars:0,template:function(i,r){i&1&&(Ie(),q(0))},styles:[MA],encapsulation:2,changeDetection:0})}return t})(),oD=(()=>{class t extends jA{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Mt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&at(o,OA,5)(o,NA,5)(o,FA,5),i&2){let a;H(a=U())&&(r._lines=a),H(a=U())&&(r._titles=a),H(a=U())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Te(SA,5)(TA,5),i&2){let o;H(o=U())&&(r._unscopedContent=o.first),H(o=U())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(le("aria-current",r._getAriaCurrent()),J("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[We],ngContentSelectors:AA,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Ie(kA),q(0),v(1,"span",1),q(2,1),q(3,2),v(4,"span",2,0),De("cdkObserveContent",function(){return r._updateItemLines(!0)}),q(6,3),y()(),q(7,4),q(8,5),X(9,"div",3))},dependencies:[Bw],encapsulation:2,changeDetection:0})}return t})();var Yd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[jo,Uo,nD,ge,Ho]})}return t})();var HA=["scene"],UA=["image"],zA=["aboutMeCard"],$A=(t,n)=>n.name;function WA(t,n){if(t&1&&(v(0,"div")(1,"a",11),X(2,"img",12),y()()),t&2){let e=n.$implicit;le("data-depth",e.depth),w(),Lt("top",e.coordinates.top,"px")("left",e.coordinates.left,"px"),Q("href",e.url,Jn),w(),Q("src",e.image,Jn)("alt",e.name)}}var Zd=class t{sceneElement;imageElement;aboutMeCard;parallaxInstance;isParallaxInitialized=!1;technologies=M([{name:"Git",url:"https://git-scm.com/",color:"#f05032",image:"library-icons/git.svg",coordinates:{top:0,left:0},depth:"0"},{name:"Angular",url:"https://angular.io/",color:"#dd0031",image:"library-icons/angular.svg",coordinates:{top:0,left:0},depth:"0"},{name:"React",url:"https://react.dev/",color:"#00d8ff",image:"library-icons/react.svg",coordinates:{top:0,left:0},depth:"0"},{name:"GraphQL",url:"https://graphql.org/",color:"#e10098",image:"library-icons/graphql.svg",coordinates:{top:0,left:0},depth:"0"},{name:"Android",url:"https://developer.android.com/",color:"#3ddc84",image:"library-icons/android.svg",coordinates:{top:0,left:0},depth:"0"}]);constructor(){rt(()=>{this.randomizePositions()}),$a(()=>{if(this.sceneElement)if(this.isParallaxInitialized)this.parallaxInstance?.updateLayers?.();else{let n=this.sceneElement.nativeElement;this.parallaxInstance=new Parallax(n,{relativeInput:!0,hoverOnly:!0}),this.isParallaxInitialized=!0}})}randomizePositions(){let n=this.imageElement.nativeElement.getBoundingClientRect(),e=this.aboutMeCard.nativeElement.getBoundingClientRect(),i=n.width-.1*n.width,r=n.height,o=30;this.technologies.update(a=>a.map(s=>ce(b({},s),{coordinates:this.generateSafeCoordinates(i,r,o,o,{x:0,y:0,width:e.width,height:e.height}),depth:"0."+(Math.floor(Math.random()*10)+1).toString()}))),console.log("rect",n);for(let a of this.technologies())console.log(a.name,a.coordinates,a.depth)}getVisibleRectHeight(n){let e=n.getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight,r=Math.max(0,e.top),o=Math.min(i,e.bottom);return Math.max(0,o-r)}generateSafeCoordinates(n,e,i,r,o){let a=0,s=0,c=!0;for(;c;)a=Math.random()*(n-i),s=Math.random()*(e-r),c=!(a+i<o.x||a>o.x+o.width||s+r<o.y||s>o.y+o.height);return{top:s,left:a}}ngOnDestroy(){this.parallaxInstance?.destroy()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-about-me"]],viewQuery:function(e,i){if(e&1&&Te(HA,5)(UA,5)(zA,5,j),e&2){let r;H(r=U())&&(i.sceneElement=r.first),H(r=U())&&(i.imageElement=r.first),H(r=U())&&(i.aboutMeCard=r.first)}},decls:19,vars:0,consts:[["scene",""],["aboutMe",""],["aboutMeCard",""],["image",""],["id","scene",1,"about-me-container"],["data-depth","0.1"],["data-depth","0.0",1,"content-layer"],[1,"page-card"],[1,"white-space"],["data-depth","0.3",1,"image-layer"],["src","images/climb_18.JPG","alt","climb"],["target","_blank","rel","noopener noreferrer",1,"icon-widget-container",3,"href"],[1,"tech-icon",3,"src","alt"]],template:function(e,i){e&1&&(v(0,"div",4,0),X(2,"div",5),v(3,"div",6,1)(5,"mat-card",7,2)(7,"mat-card-header")(8,"mat-card-title"),F(9,"About Me"),y()(),v(10,"mat-card-content")(11,"p"),F(12," My name is Dawie de Villiers I am a full-time adrenaline junky who likes to code, make music and build Legos "),y()()(),X(13,"div",8),y(),v(14,"div",9,3),X(16,"img",10),y(),Ft(17,WA,3,8,"div",null,$A),y()),e&2&&(w(17),Pt(i.technologies()))},dependencies:[Jt,On,Ni,No,Ro,Yd],styles:['.page-card[_ngcontent-%COMP%]{background:#0f172a;flex:0 0 50%}.content-layer[_ngcontent-%COMP%]{z-index:2;width:fit-content;display:flex!important;align-items:flex-start}.about-me-container[_ngcontent-%COMP%]{height:100%;width:100%;overflow:hidden}.about-me-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;height:100%;width:100%;padding:0;margin:0}.image-layer[_ngcontent-%COMP%]{z-index:0;overflow:hidden;display:flex!important;justify-content:center;align-items:center;top:30px!important}.image-layer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:1600px;height:auto;object-fit:cover;border-radius:50px}.icon-widget-container[_ngcontent-%COMP%]{z-index:3;position:absolute;width:30px;height:30px;border-radius:100%;background-color:#fff;pointer-events:all;cursor:pointer}.icon-widget-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{pointer-events:all}.icon-widget-container[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:110%;height:110%;border:1px solid white;border-radius:50%;opacity:.1;transition:opacity .3s ease}.icon-widget-container[_ngcontent-%COMP%]:hover:after{opacity:1}.tech-icon[_ngcontent-%COMP%]{position:absolute;width:20px;height:20px;margin:auto;inset:0}']})};var GA={capture:!0},qA=["focus","mousedown","mouseenter","touchstart"],jp="mat-ripple-loader-uninitialized",Bp="mat-ripple-loader-class-name",aD="mat-ripple-loader-centered",Qd="mat-ripple-loader-disabled",sD=(()=>{class t{_document=u(V);_animationsDisabled=Ct();_globalRippleOptions=u(qd,{optional:!0});_platform=u(me);_ngZone=u(O);_injector=u(re);_eventCleanups;_hosts=new Map;constructor(){let e=u(Xe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>qA.map(i=>e.listen(this._document,i,this._onInteraction,GA)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(jp,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Bp))&&e.setAttribute(Bp,i.className||""),i.centered&&e.setAttribute(aD,""),i.disabled&&e.setAttribute(Qd,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Qd,""):e.removeAttribute(Qd)}_onInteraction=e=>{let i=St(e);if(i instanceof HTMLElement){let r=i.closest(`[${jp}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Bp)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Os.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Os.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Qd),rippleConfig:{centered:e.hasAttribute(aD),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new Bo(s,this._ngZone,i,this._platform,this._injector),l=!s.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:l}),e.removeAttribute(jp)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var YA=["mat-icon-button",""],ZA=["*"],QA=new _("MAT_BUTTON_CONFIG");function cD(t){return t==null?void 0:ns(t)}var Hp=(()=>{class t{_elementRef=u(j);_ngZone=u(O);_animationsDisabled=Ct();_config=u(QA,{optional:!0});_focusMonitor=u(Fi);_cleanupClick;_renderer=u(je);_rippleLoader=u(sD);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(He).load(Vi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(le("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),It(r.color?"mat-"+r.color:""),J("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Ce],disabled:[2,"disabled","disabled",Ce],ariaDisabled:[2,"aria-disabled","ariaDisabled",Ce],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ce],tabIndex:[2,"tabIndex","tabIndex",cD],_tabindex:[2,"tabindex","_tabindex",cD]}})}return t})(),Kd=(()=>{class t extends Hp{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[We],attrs:YA,ngContentSelectors:ZA,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ie(),z(0,"span",0),q(1),z(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var KA=["matButton",""],XA=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],JA=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var lD=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),kr=(()=>{class t extends Hp{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=eR(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?lD.get(this._appearance):null,o=lD.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[We],attrs:KA,ngContentSelectors:JA,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ie(XA),z(0,"span",0),q(1),A(2,"span",1),q(3,1),B(),q(4,2),z(5,"span",2)(6,"span",3)),i&2&&J("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function eR(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var ji=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Uo,ge]})}return t})();var Up=new _("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>u(fo)}),zo="Method not implemented",Tt=class{locale;_localeChanges=new I;localeChanges=this._localeChanges;setTime(n,e,i,r){throw new Error(zo)}getHours(n){throw new Error(zo)}getMinutes(n){throw new Error(zo)}getSeconds(n){throw new Error(zo)}parseTime(n,e){throw new Error(zo)}addSeconds(n,e){throw new Error(zo)}getValidDateOrNull(n){return this.isDateInstance(n)&&this.isValid(n)?n:null}deserialize(n){return n==null||this.isDateInstance(n)&&this.isValid(n)?n:this.invalid()}setLocale(n){this.locale=n,this._localeChanges.next()}compareDate(n,e){return this.getYear(n)-this.getYear(e)||this.getMonth(n)-this.getMonth(e)||this.getDate(n)-this.getDate(e)}compareTime(n,e){return this.getHours(n)-this.getHours(e)||this.getMinutes(n)-this.getMinutes(e)||this.getSeconds(n)-this.getSeconds(e)}sameDate(n,e){if(n&&e){let i=this.isValid(n),r=this.isValid(e);return i&&r?!this.compareDate(n,e):i==r}return n==e}sameTime(n,e){if(n&&e){let i=this.isValid(n),r=this.isValid(e);return i&&r?!this.compareTime(n,e):i==r}return n==e}clampDate(n,e,i){return e&&this.compareDate(n,e)<0?e:i&&this.compareDate(n,i)>0?i:n}},Ar=new _("mat-date-formats");var uD=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var tR=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,nR=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function zp(t,n){let e=Array(t);for(let i=0;i<t;i++)e[i]=n(i);return e}var iR=(()=>{class t extends Tt{_matDateLocale=u(Up,{optional:!0});constructor(){super();let e=u(Up,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let i=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return zp(12,r=>this._format(i,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return zp(31,i=>this._format(e,new Date(2017,0,i+1)))}getDayOfWeekNames(e){let i=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return zp(7,r=>this._format(i,new Date(2017,0,r+1)))}getYearName(e){let i=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(i,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),i=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return i===7?0:i}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,i,r){let o=this._createDateWithOverflow(e,i,r);return o.getMonth()!=i,o}today(){return new Date}parse(e,i){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,i){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,ce(b({},i),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,i){return this.addCalendarMonths(e,i*12)}addCalendarMonths(e,i){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+i,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+i)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,i){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+i)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(tR.test(e)){let i=new Date(e);if(this.isValid(i))return i}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,i,r,o){let a=this.clone(e);return a.setHours(i,r,o,0),a}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,i){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let o=this._parseTimeString(r);if(o===null){let a=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();a.length>0&&(o=this._parseTimeString(a))}return o||this.invalid()}addSeconds(e,i){return new Date(e.getTime()+i*1e3)}_createDateWithOverflow(e,i,r){let o=new Date;return o.setFullYear(e,i,r),o.setHours(0,0,0,0),o}_2digit(e){return("00"+e).slice(-2)}_format(e,i){let r=new Date;return r.setUTCFullYear(i.getFullYear(),i.getMonth(),i.getDate()),r.setUTCHours(i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()),e.format(r)}_parseTimeString(e){let i=e.toUpperCase().match(nR);if(i){let r=parseInt(i[1]),o=parseInt(i[2]),a=i[3]==null?void 0:parseInt(i[3]),s=i[4];if(r===12?r=s==="AM"?0:r:s==="PM"&&(r+=12),$p(r,0,23)&&$p(o,0,59)&&(a==null||$p(a,0,59)))return this.setTime(this.today(),r,o,a||0)}return null}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();function $p(t,n,e){return!isNaN(t)&&t>=n&&t<=e}var rR={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};function hD(t=rR){return[{provide:Tt,useClass:iR},{provide:Ar,useValue:t}]}var oR=20,$o=(()=>{class t{_ngZone=u(O);_platform=u(me);_renderer=u(Xe).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new I;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=oR){return this._platform.isBrowser?new K(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Ec(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):L()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(ue(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=en(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var aR=20,Wo=(()=>{class t{_platform=u(me);_listeners;_viewportSize=null;_change=new I;_document=u(V);constructor(){let e=u(O),i=u(Xe).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=aR){return e>0?this._change.pipe(Ec(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ps=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})(),Wp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ge,Ps,ge,Ps]})}return t})();var Ls=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Rr=class extends Ls{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Nr=class extends Ls{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Gp=class extends Ls{element;constructor(n){super(),this.element=n instanceof j?n.nativeElement:n}},Xd=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Rr)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Nr)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Gp)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Jd=class extends Xd{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Tn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||re.NULL,o=r.get(we,i.injector);e=Ql(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Vs=(()=>{class t extends Xd{_moduleRef=u(Tn,{optional:!0});_document=u(V);_viewContainerRef=u(ot);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new R;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[We]})}return t})(),Go=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();var mD=Sw();function Zp(t){return new eu(t.get(Wo),t.get(V))}var eu=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Be(-this._previousScrollPosition.left),n.style.top=Be(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),mD&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),mD&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function bD(t,n){return new tu(t.get($o),t.get(O),t.get(Wo),n)}var tu=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(ue(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var js=class{enable(){}disable(){}attach(){}};function qp(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function fD(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function Us(t,n){return new nu(t.get($o),t.get(Wo),t.get(O),n)}var nu=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();qp(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},wD=(()=>{class t{_injector=u(re);constructor(){}noop=()=>new js;close=e=>bD(this._injector,e);block=()=>Zp(this._injector);reposition=e=>Us(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Bs=class{positionStrategy;scrollStrategy=new js;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var iu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var DD=(()=>{class t{_attachedOverlays=[];_document=u(V);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),CD=(()=>{class t extends DD{_ngZone=u(O);_renderer=u(Xe).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xD=(()=>{class t extends DD{_platform=u(me);_ngZone=u(O);_renderer=u(Xe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=St(e)};_clickListener=e=>{let i=St(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(pD(s.overlayElement,i)||pD(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function pD(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var ED=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),ID=(()=>{class t{_platform=u(me);_containerElement;_document=u(V);_styleLoader=u(He);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||xp()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),xp()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(ED)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yp=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Qp(t){return t&&t.nodeType===1}var ru=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new I;_attachments=new I;_detachments=new I;_positionStrategy;_scrollStrategy;_locationChanges=oe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new I;_outsidePointerEvents=new I;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,c,l,d=!1,h,m){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=h,this._renderer=m,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=rt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=b(b({},this._config),n),this._updateElementSize()}setDirection(n){this._config=ce(b({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Be(this._config.width),n.height=Be(this._config.height),n.minWidth=Be(this._config.minWidth),n.minHeight=Be(this._config.minHeight),n.maxWidth=Be(this._config.maxWidth),n.maxHeight=Be(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Qp(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Yp(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Oo(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=rt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},gD="cdk-overlay-connected-position-bounding-box",sR=/([A-Za-z%]+)$/;function zs(t,n){return new Hs(n,t.get(Wo),t.get(V),t.get(me),t.get(ID))}var Hs=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new I;_resizeSubscription=oe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(gD),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,r,s),l=this._getOverlayPoint(c,e,s),d=this._getOverlayFit(l,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:l,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,s=l)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Or(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(gD),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof j?this._origin.nativeElement:Qp(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=vD(e),{x:a,y:s}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(a+=c),l&&(s+=l);let d=0-a,h=a+o.width-i.width,m=0-s,f=s+o.height-i.height,p=this._subtractOverflows(o.width,d,h),D=this._subtractOverflows(o.height,m,f),E=p*D;return{visibleArea:E,isCompletelyWithinViewport:o.width*o.height===E,fitsInViewportVertically:D===o.height,fitsInViewportHorizontally:p==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=_D(this._overlayRef.getConfig().minHeight),s=_D(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=r,l=n.fitsInViewportHorizontally||s!=null&&s<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=vD(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),d=0,h=0;return r.width<=o.width?d=l||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?h=c||-s:h=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:h},{x:n.x+d,y:n.y+h}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!cR(this._lastScrollVisibility,i)){let r=new iu(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let f=Math.min(i.bottom-n.y+i.top,n.y),p=this._lastBoundingBoxSize.height;o=f*2,a=n.y-f,o>p&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-p/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,h,m;if(l)m=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)h=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let f=Math.min(i.right-n.x+i.left,n.x),p=this._lastBoundingBoxSize.width;d=f*2,h=n.x-f,d>p&&!this._isInitialRender&&!this._growAfterOpen&&(h=n.x-p/2)}return{top:a,left:h,bottom:s,right:m,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=Be(i.width),r.height=Be(i.height),r.top=Be(i.top)||"auto",r.bottom=Be(i.bottom)||"auto",r.left=Be(i.left)||"auto",r.right=Be(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Be(o)),a&&(r.maxWidth=Be(a))}this._lastBoundingBoxSize=i,Or(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Or(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Or(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Or(i,this._getExactOverlayY(e,n,d)),Or(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),l&&(s+=`translateY(${l}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=Be(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=Be(a.maxWidth):o&&(i.maxWidth="")),Or(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=Be(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=Be(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:fD(n,i),isOriginOutsideView:qp(n,i),isOverlayClipped:fD(e,i),isOverlayOutsideView:qp(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Oo(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof j)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Or(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function _D(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(sR);return!e||e==="px"?parseFloat(n):null}return t||null}function vD(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function cR(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var yD="cdk-global-overlay-wrapper";function Kp(t){return new ou}var ou=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(yD),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),l=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,h=this._xOffset,m=this._overlayRef.getConfig().direction==="rtl",f="",p="",D="";c?D="flex-start":d==="center"?(D="center",m?p=h:f=h):m?d==="left"||d==="end"?(D="flex-end",f=h):(d==="right"||d==="start")&&(D="flex-start",p=h):d==="left"||d==="start"?(D="flex-start",f=h):(d==="right"||d==="end")&&(D="flex-end",p=h),n.position=this._cssPosition,n.marginLeft=c?"0":f,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":p,e.justifyContent=D,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(yD),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},MD=(()=>{class t{_injector=u(re);constructor(){}global(){return Kp()}flexibleConnectedTo(e){return zs(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),SD=new _("OVERLAY_DEFAULT_CONFIG");function $s(t,n){t.get(He).load(ED);let e=t.get(ID),i=t.get(V),r=t.get(ft),o=t.get(Yt),a=t.get(Xt),s=t.get(je,null,{optional:!0})||t.get(Xe).createRenderer(null,null),c=new Bs(n),l=t.get(SD,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in i.body?c.usePopover=n?.usePopover??l:c.usePopover=!1;let d=i.createElement("div"),h=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),h.appendChild(d),c.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let m=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Qp(m)?m.after(h):m?.type==="parent"?m.element.appendChild(h):e.getContainerElement().appendChild(h),new ru(new Jd(d,o,t),h,d,c,t.get(O),t.get(CD),i,t.get(Si),t.get(xD),n?.disableAnimations??t.get(Ha,null,{optional:!0})==="NoopAnimations",t.get(we),s)}var TD=(()=>{class t{scrollStrategies=u(wD);_positionBuilder=u(MD);_injector=u(re);constructor(){}create(e){return $s(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[TD],imports:[ge,Go,Wp,Wp]})}return t})();var lR=["tooltip"],dR=20;var uR=new _("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(re);return()=>Us(t,{scrollThrottle:dR})}}),hR=new _("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var kD="tooltip-panel",mR={passive:!0},fR=8,pR=8,gR=24,_R=200,AD=(()=>{class t{_elementRef=u(j);_ngZone=u(O);_platform=u(me);_ariaDescriber=u(Qw);_focusMonitor=u(Fi);_dir=u(Xt);_injector=u(re);_viewContainerRef=u(ot);_mediaMatcher=u(Vo);_document=u(V);_renderer=u(je);_animationsDisabled=Ct();_defaultOptions=u(hR,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=vR;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Mt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=Mt(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=ai(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=ai(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new I;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=fR}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Oe(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new Rr(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(Oe(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof j)return this._overlayRef;this._detach()}let i=this._injector.get($o).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${kD}`,o=zs(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(Oe(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=$s(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(uR)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Oe(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Oe(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Oe(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Oe(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(b(b({},r.main),o.main)),this._addOffset(b(b({},r.fallback),o.fallback))])}_addOffset(e){let i=pR,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),rt(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,a;if(i==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=i==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let c=`${this._cssClassPrefix}-${kD}-`;s.removePanelClass(c+this._currentPosition),s.addPanelClass(c+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,mR))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||rt({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Li(e):!0;static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&J("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),vR=(()=>{class t{_changeDetectorRef=u(ke);_elementRef=u(j);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ct();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new I;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>gR&&e.width>=_R}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(i);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&Te(lR,7),i&2){let o;H(o=U())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&De("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(A(0,"div",1,0),uo("animationend",function(a){return r._handleAnimationEnd(a)}),A(2,"div",2),F(3),B()()),i&2&&(It(r.tooltipClass),J("mdc-tooltip--multiline",r._isMultiline),w(3),Je(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return t})();var eg=class{_box;_destroyed=new I;_resizeSubject=new I;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new K(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ue(e=>e.some(i=>i.target===n)),Tc({bufferSize:1,refCount:!0}),Oe(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},RD=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(O);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new eg(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yR=["notch"],bR=["matFormFieldNotchedOutline",""],wR=["*"],ND=["iconPrefixContainer"],OD=["textPrefixContainer"],FD=["iconSuffixContainer"],PD=["textSuffixContainer"],DR=["textField"],CR=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],xR=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function ER(t,n){t&1&&X(0,"span",21)}function IR(t,n){if(t&1&&(v(0,"label",20),q(1,1),ye(2,ER,1,0,"span",21),y()),t&2){let e=he(2);Q("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),le("for",e._control.disableAutomaticLabeling?null:e._control.id),w(2),be(!e.hideRequiredMarker&&e._control.required?2:-1)}}function MR(t,n){if(t&1&&ye(0,IR,3,5,"label",20),t&2){let e=he();be(e._hasFloatingLabel()?0:-1)}}function SR(t,n){t&1&&X(0,"div",7)}function TR(t,n){}function kR(t,n){if(t&1&&qt(0,TR,0,0,"ng-template",13),t&2){he(2);let e=Qa(1);Q("ngTemplateOutlet",e)}}function AR(t,n){if(t&1&&(v(0,"div",9),ye(1,kR,1,1,null,13),y()),t&2){let e=he();Q("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),w(),be(e._forceDisplayInfixLabel()?-1:1)}}function RR(t,n){t&1&&(v(0,"div",10,2),q(2,2),y())}function NR(t,n){t&1&&(v(0,"div",11,3),q(2,3),y())}function OR(t,n){}function FR(t,n){if(t&1&&qt(0,OR,0,0,"ng-template",13),t&2){he();let e=Qa(1);Q("ngTemplateOutlet",e)}}function PR(t,n){t&1&&(v(0,"div",14,4),q(2,4),y())}function LR(t,n){t&1&&(v(0,"div",15,5),q(2,5),y())}function VR(t,n){t&1&&X(0,"div",16)}function jR(t,n){t&1&&(v(0,"div",18),q(1,6),y())}function BR(t,n){if(t&1&&(v(0,"mat-hint",22),F(1),y()),t&2){let e=he(2);Q("id",e._hintLabelId),w(),Je(e.hintLabel)}}function HR(t,n){if(t&1&&(v(0,"div",19),ye(1,BR,2,2,"mat-hint",22),q(2,7),X(3,"div",23),q(4,8),y()),t&2){let e=he();w(),be(e.hintLabel?1:-1)}}var tg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["mat-label"]]})}return t})(),UR=new _("MatError");var ng=(()=>{class t{align="start";id=u(ft).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(Zt("id",r.id),le("align",null),J("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),zR=new _("MatPrefix");var $R=new _("MatSuffix");var zD=new _("FloatingLabelParent"),LD=(()=>{class t{_elementRef=u(j);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(RD);_ngZone=u(O);_parent=u(zD);_resizeSubscription=new oe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return WR(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&J("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function WR(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var VD="mdc-line-ripple--active",au="mdc-line-ripple--deactivating",jD=(()=>{class t{_elementRef=u(j);_cleanupTransitionEnd;constructor(){let e=u(O),i=u(je);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(au),e.add(VD)}deactivate(){this._elementRef.nativeElement.classList.add(au)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(au);e.propertyName==="opacity"&&r&&i.remove(VD,au)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),BD=(()=>{class t{_elementRef=u(j);_ngZone=u(O);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Te(yR,5),i&2){let o;H(o=U())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&J("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:bR,ngContentSelectors:wR,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Ie(),z(0,"div",1),A(1,"div",2,0),q(3),B(),z(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),GR=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t})}return t})();var qR=new _("MatFormField"),YR=new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),HD="fill",ZR="auto",UD="fixed",QR="translateY(-50%)",$D=(()=>{class t{_elementRef=u(j);_changeDetectorRef=u(ke);_platform=u(me);_idGenerator=u(ft);_ngZone=u(O);_defaults=u(YR,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ts("iconPrefixContainer");_textPrefixContainerSignal=ts("textPrefixContainer");_iconSuffixContainerSignal=ts("iconSuffixContainer");_textSuffixContainerSignal=ts("textSuffixContainer");_prefixSuffixContainers=gn(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Zb(tg);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Mt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ZR}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||HD;this._appearanceSignal.set(i)}_appearanceSignal=M(HD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||UD}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||UD}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new I;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ct();constructor(){let e=this._defaults,i=u(Xt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Yn(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=gn(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(pt([void 0,void 0]),ne(()=>[i.errorState,i.userAriaDescribedBy]),Sc(),ue(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Oe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),bn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){e0({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=gn(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",h=`${a+s}px`,f=`calc(${d} * (${h} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,p=`var(--mat-mdc-form-field-label-transform, ${QR} translateX(${f}))`,D=a+s+c+l;return[p,D]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&($l(o,r._labelChild,tg,5),at(o,GR,5)(o,zR,5)(o,$R,5)(o,UR,5)(o,ng,5)),i&2){Gl();let a;H(a=U())&&(r._formFieldControl=a.first),H(a=U())&&(r._prefixChildren=a),H(a=U())&&(r._suffixChildren=a),H(a=U())&&(r._errorChildren=a),H(a=U())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Wl(r._iconPrefixContainerSignal,ND,5)(r._textPrefixContainerSignal,OD,5)(r._iconSuffixContainerSignal,FD,5)(r._textSuffixContainerSignal,PD,5),Te(DR,5)(ND,5)(OD,5)(FD,5)(PD,5)(LD,5)(BD,5)(jD,5)),i&2){Gl(4);let o;H(o=U())&&(r._textField=o.first),H(o=U())&&(r._iconPrefixContainer=o.first),H(o=U())&&(r._textPrefixContainer=o.first),H(o=U())&&(r._iconSuffixContainer=o.first),H(o=U())&&(r._textSuffixContainer=o.first),H(o=U())&&(r._floatingLabel=o.first),H(o=U())&&(r._notchedOutline=o.first),H(o=U())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&J("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ge([{provide:qR,useExisting:t},{provide:zD,useExisting:t}])],ngContentSelectors:xR,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Ie(CR),qt(0,MR,1,1,"ng-template",null,0,ql),v(2,"div",6,1),De("click",function(a){return r._control.onContainerClick(a)}),ye(4,SR,1,0,"div",7),v(5,"div",8),ye(6,AR,2,2,"div",9),ye(7,RR,3,0,"div",10),ye(8,NR,3,0,"div",11),v(9,"div",12),ye(10,FR,1,1,null,13),q(11),y(),ye(12,PR,3,0,"div",14),ye(13,LR,3,0,"div",15),y(),ye(14,VR,1,0,"div",16),y(),v(15,"div",17),ye(16,jR,2,0,"div",18)(17,HR,5,1,"div",19),y()),i&2){let o;w(2),J("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),w(2),be(!r._hasOutline()&&!r._control.disabled?4:-1),w(2),be(r._hasOutline()?6:-1),w(),be(r._hasIconPrefix?7:-1),w(),be(r._hasTextPrefix?8:-1),w(2),be(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),w(2),be(r._hasTextSuffix?12:-1),w(),be(r._hasIconSuffix?13:-1),w(),be(r._hasOutline()?-1:14),w(),J("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();w(),be((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[LD,BD,kf,jD,ng],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var KR=["mat-calendar-body",""];function XR(t,n){return this._trackRow(n)}var QD=(t,n)=>n.id;function JR(t,n){if(t&1&&(A(0,"tr",0)(1,"td",3),F(2),B()()),t&2){let e=he();w(),Lt("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),le("colspan",e.numCols),w(),Qt(" ",e.label," ")}}function eN(t,n){if(t&1&&(A(0,"td",3),F(1),B()),t&2){let e=he(2);Lt("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),le("colspan",e._firstRowOffset),w(),Qt(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function tN(t,n){if(t&1){let e=lo();A(0,"td",6)(1,"button",7),uo("click",function(r){let o=vt(e).$implicit,a=he(2);return yt(a._cellClicked(o,r))})("focus",function(r){let o=vt(e).$implicit,a=he(2);return yt(a._emitActiveDateChange(o,r))}),A(2,"span",8),F(3),B(),z(4,"span",9),B()()}if(t&2){let e=n.$implicit,i=n.$index,r=he().$index,o=he();Lt("width",o._cellWidth)("padding-top",o._cellPadding)("padding-bottom",o._cellPadding),le("data-mat-row",r)("data-mat-col",i),w(),It(e.cssClasses),J("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",o._isActiveCell(r,i))("mat-calendar-body-range-start",o._isRangeStart(e.compareValue))("mat-calendar-body-range-end",o._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",o._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",o._isComparisonBridgeStart(e.compareValue,r,i))("mat-calendar-body-comparison-bridge-end",o._isComparisonBridgeEnd(e.compareValue,r,i))("mat-calendar-body-comparison-start",o._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",o._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",o._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",o._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",o._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",o._isInPreview(e.compareValue)),Zt("tabIndex",o._isActiveCell(r,i)?0:-1),le("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",o._isSelected(e.compareValue))("aria-current",o.todayValue===e.compareValue?"date":null)("aria-describedby",o._getDescribedby(e.compareValue)),w(),J("mat-calendar-body-selected",o._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",o._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",o.todayValue===e.compareValue),w(),Qt(" ",e.displayValue," ")}}function nN(t,n){if(t&1&&(A(0,"tr",1),ye(1,eN,2,6,"td",4),Ft(2,tN,5,49,"td",5,QD),B()),t&2){let e=n.$implicit,i=n.$index,r=he();w(),be(i===0&&r._firstRowOffset?1:-1),w(),Pt(e)}}function iN(t,n){if(t&1&&(v(0,"th",2)(1,"span",6),F(2),y(),v(3,"span",3),F(4),y()()),t&2){let e=n.$implicit;w(2),Je(e.long),w(2),Je(e.narrow)}}var rN=["*"];function oN(t,n){}function aN(t,n){if(t&1){let e=lo();v(0,"mat-month-view",4),mo("activeDateChange",function(r){vt(e);let o=he();return Ka(o.activeDate,r)||(o.activeDate=r),yt(r)}),De("_userSelection",function(r){vt(e);let o=he();return yt(o._dateSelected(r))})("dragStarted",function(r){vt(e);let o=he();return yt(o._dragStarted(r))})("dragEnded",function(r){vt(e);let o=he();return yt(o._dragEnded(r))}),y()}if(t&2){let e=he();ho("activeDate",e.activeDate),Q("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function sN(t,n){if(t&1){let e=lo();v(0,"mat-year-view",5),mo("activeDateChange",function(r){vt(e);let o=he();return Ka(o.activeDate,r)||(o.activeDate=r),yt(r)}),De("monthSelected",function(r){vt(e);let o=he();return yt(o._monthSelectedInYearView(r))})("selectedChange",function(r){vt(e);let o=he();return yt(o._goToDateInView(r,"month"))}),y()}if(t&2){let e=he();ho("activeDate",e.activeDate),Q("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function cN(t,n){if(t&1){let e=lo();v(0,"mat-multi-year-view",6),mo("activeDateChange",function(r){vt(e);let o=he();return Ka(o.activeDate,r)||(o.activeDate=r),yt(r)}),De("yearSelected",function(r){vt(e);let o=he();return yt(o._yearSelectedInMultiYearView(r))})("selectedChange",function(r){vt(e);let o=he();return yt(o._goToDateInView(r,"year"))}),y()}if(t&2){let e=he();ho("activeDate",e.activeDate),Q("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function lN(t,n){}var dN=["button"],uN=[[["","matDatepickerToggleIcon",""]]],hN=["[matDatepickerToggleIcon]"];function mN(t,n){t&1&&(bt(),v(0,"svg",2),X(1,"path",3),y())}var Yo=(()=>{class t{changes=new I;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,i){return`${e} \u2013 ${i}`}formatYearRangeLabel(e,i){return`${e} to ${i}`}static \u0275fac=function(i){return new(i||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fN=0,Gs=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=fN++;cssClasses;constructor(n,e,i,r,o,a=n,s){this.value=n,this.displayValue=e,this.ariaLabel=i,this.enabled=r,this.compareValue=a,this.rawValue=s,this.cssClasses=o instanceof Set?Array.from(o):o}},pN={passive:!1,capture:!0},su={passive:!0,capture:!0},WD={passive:!0},qo=(()=>{class t{_elementRef=u(j);_ngZone=u(O);_platform=u(me);_intl=u(Yo);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new R;previewChange=new R;activeDateChange=new R;dragStarted=new R;dragEnded=new R;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=u(re);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=u(je),i=u(ft);this._startDateLabelId=i.getId("mat-calendar-body-start-"),this._endDateLabelId=i.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=i.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=i.getId("mat-calendar-body-comparison-end-"),u(He).load(Vi),this._ngZone.runOutsideAngular(()=>{let r=this._elementRef.nativeElement,o=[e.listen(r,"touchmove",this._touchmoveHandler,pN),e.listen(r,"mouseenter",this._enterHandler,su),e.listen(r,"focus",this._enterHandler,su),e.listen(r,"mouseleave",this._leaveHandler,su),e.listen(r,"blur",this._leaveHandler,su),e.listen(r,"mousedown",this._mousedownHandler,WD),e.listen(r,"touchstart",this._mousedownHandler,WD)];this._platform.isBrowser&&o.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=o})}_cellClicked(e,i){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:i})}_emitActiveDateChange(e,i){e.enabled&&this.activeDateChange.emit({value:e.value,event:i})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let i=e.numCols,{rows:r,numCols:o}=this;(e.rows||i)&&(this._firstRowOffset=r&&r.length&&r[0].length?o-r[0].length:0),(e.cellAspectRatio||i||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/o}%`),(i||!this._cellWidth)&&(this._cellWidth=`${100/o}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,i){let r=e*this.numCols+i;return e&&(r-=this._firstRowOffset),r==this.activeCell}_focusActiveCell(e=!0){rt(()=>{setTimeout(()=>{let i=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");i&&(e||(this._skipNextFocus=!0),i.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return og(e,this.startValue,this.endValue)}_isRangeEnd(e){return ag(e,this.startValue,this.endValue)}_isInRange(e){return sg(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return og(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,i,r){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let o=this.rows[i][r-1];if(!o){let a=this.rows[i-1];o=a&&a[a.length-1]}return o&&!this._isRangeEnd(o.compareValue)}_isComparisonBridgeEnd(e,i,r){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let o=this.rows[i][r+1];if(!o){let a=this.rows[i+1];o=a&&a[0]}return o&&!this._isRangeStart(o.compareValue)}_isComparisonEnd(e){return ag(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return sg(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return og(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return ag(e,this.previewStart,this.previewEnd)}_isInPreview(e){return sg(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let i=this._getCellFromElement(e.target);i&&this._ngZone.run(()=>this.previewChange.emit({value:i.enabled?i:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let i=GD(e),r=i?this._getCellFromElement(i):null;i!==e.target&&(this._didDragSinceMouseDown=!0),rg(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:r?.enabled?r:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let i=e.target&&this._getCellFromElement(e.target);!i||!this._isInRange(i.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:i.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let i=rg(e.target);if(!i){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}i.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let r=this._getCellFromElement(i);this.dragEnded.emit({value:r?.rawValue??null,event:e})})};_touchendHandler=e=>{let i=GD(e);i&&this._mouseupHandler({target:i})};_getCellFromElement(e){let i=rg(e);if(i){let r=i.getAttribute("data-mat-row"),o=i.getAttribute("data-mat-col");if(r&&o)return this.rows[parseInt(r)]?.[parseInt(o)]||null}return null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Se],attrs:KR,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(i,r){i&1&&(ye(0,JR,3,6,"tr",0),Ft(1,nN,4,1,"tr",1,XR,!0),A(3,"span",2),F(4),B(),A(5,"span",2),F(6),B(),A(7,"span",2),F(8),B(),A(9,"span",2),F(10),B()),i&2&&(be(r._firstRowOffset<r.labelMinRequiredCells?0:-1),w(),Pt(r.rows),w(2),Zt("id",r._startDateLabelId),w(),Qt(" ",r.startDateAccessibleName,`
`),w(),Zt("id",r._endDateLabelId),w(),Qt(" ",r.endDateAccessibleName,`
`),w(),Zt("id",r._comparisonStartDateLabelId),w(),yr(" ",r.comparisonDateAccessibleName," ",r.startDateAccessibleName,`
`),w(),Zt("id",r._comparisonEndDateLabelId),w(),yr(" ",r.comparisonDateAccessibleName," ",r.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function ig(t){return t?.nodeName==="TD"}function rg(t){let n;return ig(t)?n=t:ig(t.parentNode)?n=t.parentNode:ig(t.parentNode?.parentNode)&&(n=t.parentNode.parentNode),n?.getAttribute("data-mat-row")!=null?n:null}function og(t,n,e){return e!==null&&n!==e&&t<e&&t===n}function ag(t,n,e){return n!==null&&n!==e&&t>=n&&t===e}function sg(t,n,e,i){return i&&n!==null&&e!==null&&n!==e&&t>=n&&t<=e}function GD(t){let n=t.changedTouches[0];return document.elementFromPoint(n.clientX,n.clientY)}var nn=class{start;end;_disableStructuralEquivalency;constructor(n,e){this.start=n,this.end=e}},cu=(()=>{class t{selection;_adapter;_selectionChanged=new I;selectionChanged=this._selectionChanged;constructor(e,i){this.selection=e,this._adapter=i,this.selection=e}updateSelection(e,i){let r=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:i,oldValue:r})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(i){Bl()};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),gN=(()=>{class t extends cu{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new t(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(i){return new(i||t)(N(Tt))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();var _N={provide:cu,useFactory:()=>u(cu,{optional:!0,skipSelf:!0})||new gN(u(Tt))};var KD=new _("MAT_DATE_RANGE_SELECTION_STRATEGY");var cg=7,vN=0,qD=(()=>{class t{_changeDetectorRef=u(ke);_dateFormats=u(Ar,{optional:!0});_dateAdapter=u(Tt,{optional:!0});_dir=u(Xt,{optional:!0});_rangeStrategy=u(KD,{optional:!0});_rerenderSubscription=oe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let i=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._hasSameMonthAndYear(i,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof nn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new R;_userSelection=new R;dragStarted=new R;dragEnded=new R;activeDateChange=new R;_matCalendarBody;_monthLabel=M("");_weeks=M([]);_firstWeekOffset=M(0);_rangeStart=M(null);_rangeEnd=M(null);_comparisonRangeStart=M(null);_comparisonRangeEnd=M(null);_previewStart=M(null);_previewEnd=M(null);_isRange=M(!1);_todayDate=M(null);_weekdays=M([]);constructor(){u(He).load(Oi),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(pt(null)).subscribe(()=>this._init())}ngOnChanges(e){let i=e.comparisonStart||e.comparisonEnd;i&&!i.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let i=e.value,r=this._getDateFromDayOfMonth(i),o,a;this._selected instanceof nn?(o=this._getDateInCurrentMonth(this._selected.start),a=this._getDateInCurrentMonth(this._selected.end)):o=a=this._getDateInCurrentMonth(this._selected),(o!==i||a!==i)&&this.selectedChange.emit(r),this._userSelection.emit({value:r,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let i=e.value,r=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(i),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let i=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!Li(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(i,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((cg+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%cg),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:i}){if(this._rangeStrategy){let r=i?i.rawValue:null,o=this._rangeStrategy.createPreview(r,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)),this.activeDrag&&r){let a=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,r,e);a&&(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let i=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:i??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),i=this._dateAdapter.getDayOfWeekNames("narrow"),o=this._dateAdapter.getDayOfWeekNames("long").map((a,s)=>({long:a,narrow:i[s],id:vN++}));this._weekdays.set(o.slice(e).concat(o.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),i=this._dateAdapter.getDateNames(),r=[[]];for(let o=0,a=this._firstWeekOffset();o<e;o++,a++){a==cg&&(r.push([]),a=0);let s=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),o+1),c=this._shouldEnableDate(s),l=this._dateAdapter.format(s,this._dateFormats.display.dateA11yLabel),d=this.dateClass?this.dateClass(s,"month"):void 0;r[r.length-1].push(new Gs(o+1,i[o],l,c,d,this._getCellCompareValue(s),s))}this._weeks.set(r)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,i){return!!(e&&i&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(i)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(i))}_getCellCompareValue(e){if(e){let i=this._dateAdapter.getYear(e),r=this._dateAdapter.getMonth(e),o=this._dateAdapter.getDate(e);return new Date(i,r,o).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof nn?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-month-view"]],viewQuery:function(i,r){if(i&1&&Te(qo,5),i&2){let o;H(o=U())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Se],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(i,r){i&1&&(v(0,"table",0)(1,"thead",1)(2,"tr"),Ft(3,iN,5,2,"th",2,QD),y(),v(5,"tr",3),X(6,"th",4),y()(),v(7,"tbody",5),De("selectedValueChange",function(a){return r._dateSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("previewChange",function(a){return r._previewChanged(a)})("dragStarted",function(a){return r.dragStarted.emit(a)})("dragEnded",function(a){return r._dragEnded(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),y()()),i&2&&(w(3),Pt(r._weekdays()),w(4),Q("label",r._monthLabel())("rows",r._weeks())("todayValue",r._todayDate())("startValue",r._rangeStart())("endValue",r._rangeEnd())("comparisonStart",r._comparisonRangeStart())("comparisonEnd",r._comparisonRangeEnd())("previewStart",r._previewStart())("previewEnd",r._previewEnd())("isRange",r._isRange())("labelMinRequiredCells",3)("activeCell",r._dateAdapter.getDate(r.activeDate)-1)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName))},dependencies:[qo],encapsulation:2,changeDetection:0})}return t})(),Bt=24,lg=4,YD=(()=>{class t{_changeDetectorRef=u(ke);_dateAdapter=u(Tt,{optional:!0});_dir=u(Xt,{optional:!0});_rerenderSubscription=oe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let i=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),XD(this._dateAdapter,i,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof nn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new R;yearSelected=new R;activeDateChange=new R;_matCalendarBody;_years=M([]);_todayYear=M(0);_selectedYear=M(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(pt(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let i=this._dateAdapter.getYear(this._activeDate)-Ws(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),r=[];for(let o=0,a=[];o<Bt;o++)a.push(i+o),a.length==lg&&(r.push(a.map(s=>this._createCellForYear(s))),a=[]);this._years.set(r),this._changeDetectorRef.markForCheck()}_yearSelected(e){let i=e.value,r=this._dateAdapter.createDate(i,0,1),o=this._getDateFromYear(i);this.yearSelected.emit(r),this.selectedChange.emit(o)}_updateActiveDate(e){let i=e.value,r=this._activeDate;this.activeDate=this._getDateFromYear(i),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let i=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-lg);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,lg);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ws(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Bt-Ws(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-Bt*10:-Bt);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?Bt*10:Bt);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Ws(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let i=this._dateAdapter.getMonth(this.activeDate),r=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,i,1));return this._dateAdapter.createDate(e,i,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForYear(e){let i=this._dateAdapter.createDate(e,0,1),r=this._dateAdapter.getYearName(i),o=this.dateClass?this.dateClass(i,"multi-year"):void 0;return new Gs(e,r,r,this._shouldEnableYear(e),o)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(e,0,1);for(let r=i;this._dateAdapter.getYear(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof nn){let i=e.start||e.end;i&&this._selectedYear.set(this._dateAdapter.getYear(i))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-multi-year-view"]],viewQuery:function(i,r){if(i&1&&Te(qo,5),i&2){let o;H(o=U())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(i,r){i&1&&(v(0,"table",0)(1,"thead",1)(2,"tr"),X(3,"th",2),y()(),v(4,"tbody",3),De("selectedValueChange",function(a){return r._yearSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),y()()),i&2&&(w(4),Q("rows",r._years())("todayValue",r._todayYear())("startValue",r._selectedYear())("endValue",r._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",r._getActiveCell()))},dependencies:[qo],encapsulation:2,changeDetection:0})}return t})();function XD(t,n,e,i,r){let o=t.getYear(n),a=t.getYear(e),s=JD(t,i,r);return Math.floor((o-s)/Bt)===Math.floor((a-s)/Bt)}function Ws(t,n,e,i){let r=t.getYear(n);return yN(r-JD(t,e,i),Bt)}function JD(t,n,e){let i=0;return e?i=t.getYear(e)-Bt+1:n&&(i=t.getYear(n)),i}function yN(t,n){return(t%n+n)%n}var ZD=(()=>{class t{_changeDetectorRef=u(ke);_dateFormats=u(Ar,{optional:!0});_dateAdapter=u(Tt,{optional:!0});_dir=u(Xt,{optional:!0});_rerenderSubscription=oe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let i=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._dateAdapter.getYear(i)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof nn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new R;monthSelected=new R;activeDateChange=new R;_matCalendarBody;_months=M([]);_yearLabel=M("");_todayMonth=M(null);_selectedMonth=M(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(pt(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let i=e.value,r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),i,1);this.monthSelected.emit(r);let o=this._getDateFromMonth(i);this.selectedChange.emit(o)}_updateActiveDate(e){let i=e.value,r=this._activeDate;this.activeDate=this._getDateFromMonth(i),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let i=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(i,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(i=>i.map(r=>this._createCellForMonth(r,e[r])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.getNumDaysInMonth(i);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForMonth(e,i){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),o=this._dateAdapter.format(r,this._dateFormats.display.monthYearA11yLabel),a=this.dateClass?this.dateClass(r,"year"):void 0;return new Gs(e,i.toLocaleUpperCase(),o,this._shouldEnableMonth(e),a)}_shouldEnableMonth(e){let i=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(i,e)||this._isYearAndMonthBeforeMinDate(i,e))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(i,e,1);for(let o=r;this._dateAdapter.getMonth(o)==e;o=this._dateAdapter.addCalendarDays(o,1))if(this.dateFilter(o))return!0;return!1}_isYearAndMonthAfterMaxDate(e,i){if(this.maxDate){let r=this._dateAdapter.getYear(this.maxDate),o=this._dateAdapter.getMonth(this.maxDate);return e>r||e===r&&i>o}return!1}_isYearAndMonthBeforeMinDate(e,i){if(this.minDate){let r=this._dateAdapter.getYear(this.minDate),o=this._dateAdapter.getMonth(this.minDate);return e<r||e===r&&i<o}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof nn?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-year-view"]],viewQuery:function(i,r){if(i&1&&Te(qo,5),i&2){let o;H(o=U())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(i,r){i&1&&(v(0,"table",0)(1,"thead",1)(2,"tr"),X(3,"th",2),y()(),v(4,"tbody",3),De("selectedValueChange",function(a){return r._monthSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),y()()),i&2&&(w(4),Q("label",r._yearLabel())("rows",r._months())("todayValue",r._todayMonth())("startValue",r._selectedMonth())("endValue",r._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",r._dateAdapter.getMonth(r.activeDate)))},dependencies:[qo],encapsulation:2,changeDetection:0})}return t})(),eC=(()=>{class t{_intl=u(Yo);calendar=u(dg);_dateAdapter=u(Tt,{optional:!0});_dateFormats=u(Ar,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){u(He).load(Oi);let e=u(ke);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-Bt))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:Bt))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,i=this._intl,r=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=i.switchToMultiYearViewLabel,this._prevButtonLabel=i.prevMonthLabel,this._nextButtonLabel=i.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=r.getYearName(e.activeDate),this._periodButtonDescription=r.getYearName(e.activeDate),this._periodButtonLabel=i.switchToMonthViewLabel,this._prevButtonLabel=i.prevYearLabel,this._nextButtonLabel=i.nextYearLabel):(this._periodButtonText=i.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=i.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=i.switchToMonthViewLabel,this._prevButtonLabel=i.prevMultiYearLabel,this._nextButtonLabel=i.nextMultiYearLabel)}_isSameView(e,i){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(i)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(i):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(i):XD(this._dateAdapter,e,i,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let i=this._dateAdapter.getYear(this.calendar.activeDate)-Ws(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),r=i+Bt-1,o=this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1)),a=this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1));return[o,a]}_periodButtonLabelId=u(ft).getId("mat-calendar-period-label-");static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:rN,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(i,r){i&1&&(Ie(),v(0,"div",0)(1,"div",1)(2,"span",2),F(3),y(),v(4,"button",3),De("click",function(){return r.currentPeriodClicked()}),v(5,"span",4),F(6),y(),bt(),v(7,"svg",5),X(8,"polygon",6),y()(),xi(),X(9,"div",7),q(10),v(11,"button",8),De("click",function(){return r.previousClicked()}),bt(),v(12,"svg",9),X(13,"path",10),y()(),xi(),v(14,"button",11),De("click",function(){return r.nextClicked()}),bt(),v(15,"svg",9),X(16,"path",12),y()()()()),i&2&&(w(2),Q("id",r._periodButtonLabelId),w(),Je(r.periodButtonDescription),w(),le("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),w(2),Je(r.periodButtonText),w(),J("mat-calendar-invert",r.calendar.currentView!=="month"),w(4),Q("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),le("aria-label",r.prevButtonLabel),w(3),Q("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),le("aria-label",r.nextButtonLabel))},dependencies:[kr,Kd,AD],encapsulation:2,changeDetection:0})}return t})(),dg=(()=>{class t{_dateAdapter=u(Tt,{optional:!0});_dateFormats=u(Ar,{optional:!0});_changeDetectorRef=u(ke);_elementRef=u(j);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof nn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new R;yearSelected=new R;monthSelected=new R;viewChanged=new R(!0);_userSelection=new R;_userDragDrop=new R;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let i=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),i&&(this.stateChanges.next(),this.viewChanged.emit(i))}_currentView;_activeDrag=null;stateChanges=new I;constructor(){this._intlChanges=u(Yo).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Rr(this.headerComponent||eC),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let i=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,r=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,o=i||r||e.dateFilter;if(o&&!o.firstChange){let a=this._getCurrentViewComponent();a&&(this._elementRef.nativeElement.contains(Fo())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),a._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let i=e.value;(this.selected instanceof nn||i&&!this._dateAdapter.sameDate(i,this.selected))&&this.selectedChange.emit(i),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,i){this.activeDate=e,this.currentView=i}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-calendar"]],viewQuery:function(i,r){if(i&1&&Te(qD,5)(ZD,5)(YD,5),i&2){let o;H(o=U())&&(r.monthView=o.first),H(o=U())&&(r.yearView=o.first),H(o=U())&&(r.multiYearView=o.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[Ge([_N]),Se],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(i,r){if(i&1&&(qt(0,oN,0,0,"ng-template",0),v(1,"div",1),ye(2,aN,1,11,"mat-month-view",2)(3,sN,1,6,"mat-year-view",3)(4,cN,1,6,"mat-multi-year-view",3),y()),i&2){let o;Q("cdkPortalOutlet",r._calendarHeaderPortal),w(2),be((o=r.currentView)==="month"?2:o==="year"?3:o==="multi-year"?4:-1)}},dependencies:[Vs,Ip,qD,ZD,YD],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();var bN=(()=>{class t{_elementRef=u(j);_animationsDisabled=Ct();_changeDetectorRef=u(ke);_globalModel=u(cu);_dateAdapter=u(Tt);_ngZone=u(O);_rangeSelectionStrategy=u(KD,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new I;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(u(He).load(Oi),this._closeButtonText=u(Yo).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,i=u(je);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[i.listen(e,"animationstart",this._handleAnimationEvent),i.listen(e,"animationend",this._handleAnimationEvent),i.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let i=this._model.selection,r=e.value,o=i instanceof nn;if(o&&this._rangeSelectionStrategy){let a=this._rangeSelectionStrategy.selectionFinished(r,i,e.event);this._model.updateSelection(a,this)}else r&&(o||!this._dateAdapter.sameDate(r,i))&&this._model.add(r);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let i=this._elementRef.nativeElement;e.target!==i||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",i.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,i){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,i&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-datepicker-content"]],viewQuery:function(i,r){if(i&1&&Te(dg,5),i&2){let o;H(o=U())&&(r._calendar=o.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(i,r){i&2&&(It(r.color?"mat-"+r.color:""),J("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(i,r){i&1&&(v(0,"div",0)(1,"mat-calendar",1),De("yearSelected",function(a){return r.datepicker._selectYear(a)})("monthSelected",function(a){return r.datepicker._selectMonth(a)})("viewChanged",function(a){return r.datepicker._viewChanged(a)})("_userSelection",function(a){return r._handleUserSelection(a)})("_userDragDrop",function(a){return r._handleUserDragDrop(a)}),y(),qt(2,lN,0,0,"ng-template",2),v(3,"button",3),De("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),F(4),y()()),i&2&&(J("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),le("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),w(),It(r.datepicker.panelClass),Q("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),w(),Q("cdkPortalOutlet",r._actionsPortal),w(),J("cdk-visually-hidden",!r._closeButtonFocused),Q("color",r.color||"primary"),w(),Je(r._closeButtonText))},dependencies:[kp,dg,Vs,kr],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var wN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","matDatepickerToggleIcon",""]]})}return t})(),DN=(()=>{class t{_intl=u(Yo);_changeDetectorRef=u(ke);_stateChanges=oe.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=u(new kn("tabindex"),{optional:!0}),i=Number(e);this.tabIndex=i||i===0?i:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:L(),i=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:L(),r=this.datepicker?bn(this.datepicker.openedStream,this.datepicker.closedStream):L();this._stateChanges.unsubscribe(),this._stateChanges=bn(this._intl.changes,e,i,r).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-datepicker-toggle"]],contentQueries:function(i,r,o){if(i&1&&at(o,wN,5),i&2){let a;H(a=U())&&(r._customIcon=a.first)}},viewQuery:function(i,r){if(i&1&&Te(dN,5),i&2){let o;H(o=U())&&(r._button=o.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(i,r){i&1&&De("click",function(a){return r._open(a)}),i&2&&(le("tabindex",null)("data-mat-calendar",r.datepicker?r.datepicker.id:null),J("mat-datepicker-toggle-active",r.datepicker&&r.datepicker.opened)("mat-accent",r.datepicker&&r.datepicker.color==="accent")("mat-warn",r.datepicker&&r.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",Ce],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Se],ngContentSelectors:hN,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(i,r){i&1&&(Ie(uN),v(0,"button",1,0),ye(2,mN,2,0,":svg:svg",2),q(3),y()),i&2&&(Q("tabIndex",r.disabled?-1:r.tabIndex)("disabled",r.disabled)("disableRipple",r.disableRipple),le("aria-haspopup",r.datepicker?"dialog":null)("aria-label",r.ariaLabel||r._intl.openCalendarLabel)("aria-expanded",r.datepicker?r.datepicker.opened:null),w(2),be(r._customIcon?-1:2))},dependencies:[Kd],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var tC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[Yo],imports:[ji,Xp,Ap,Go,bN,DN,eC,ge,Ps]})}return t})();var ug=new _("CdkAccordion"),nC=(()=>{class t{_stateChanges=new I;_openCloseAllActions=new I;id=u(ft).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",Ce]},exportAs:["cdkAccordion"],features:[Ge([{provide:ug,useExisting:t}]),Se]})}return t})(),iC=(()=>{class t{accordion=u(ug,{optional:!0,skipSelf:!0});_changeDetectorRef=u(ke);_expansionDispatcher=u(Fs);_openCloseAllSubscription=oe.EMPTY;closed=new R;opened=new R;destroyed=new R;expandedChange=new R;id=u(ft).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=M(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,i)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===i&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",Ce],disabled:[2,"disabled","disabled",Ce]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[Ge([{provide:ug,useValue:void 0}])]})}return t})(),rC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();var CN=["body"],xN=["bodyWrapper"],EN=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],IN=["mat-expansion-panel-header","*","mat-action-row"];function MN(t,n){}var SN=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],TN=["mat-panel-title","mat-panel-description","*"];function kN(t,n){t&1&&(A(0,"span",1),bt(),A(1,"svg",2),z(2,"path",3),B()())}var hg=new _("MAT_ACCORDION"),oC=new _("MAT_EXPANSION_PANEL"),AN=(()=>{class t{_template=u(Wt);_expansionPanel=u(oC,{optional:!0});constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),aC=new _("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),qs=(()=>{class t extends iC{_viewContainerRef=u(ot);_animationsDisabled=Ct();_document=u(V);_ngZone=u(O);_elementRef=u(j);_renderer=u(je);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new R;afterCollapse=new R;_inputChanges=new I;accordion=u(hg,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=u(ft).getId("mat-expansion-panel-header-");constructor(){super();let e=u(aC,{optional:!0});this._expansionDispatcher=u(Fs),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(pt(null),ue(()=>this.expanded&&!this._portal),lt(1)).subscribe(()=>{this._portal=new Nr(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:i})=>{e===this._bodyWrapper?.nativeElement&&i==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(i,r,o){if(i&1&&at(o,AN,5),i&2){let a;H(a=U())&&(r._lazyContent=a.first)}},viewQuery:function(i,r){if(i&1&&Te(CN,5)(xN,5),i&2){let o;H(o=U())&&(r._body=o.first),H(o=U())&&(r._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(i,r){i&2&&J("mat-expanded",r.expanded)("mat-expansion-panel-spacing",r._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",Ce],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[Ge([{provide:hg,useValue:void 0},{provide:oC,useExisting:t}]),We,Se],ngContentSelectors:IN,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,r){i&1&&(Ie(EN),q(0),v(1,"div",2,0)(3,"div",3,1)(5,"div",4),q(6,1),qt(7,MN,0,0,"ng-template",5),y(),q(8,2),y()()),i&2&&(w(),le("inert",r.expanded?null:""),w(2),Q("id",r.id),le("aria-labelledby",r._headerId),w(4),Q("cdkPortalOutlet",r._portal))},dependencies:[Vs],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return t})();var Ys=(()=>{class t{panel=u(qs,{host:!0});_element=u(j);_focusMonitor=u(Fi);_changeDetectorRef=u(ke);_parentChangeSubscription=oe.EMPTY;constructor(){u(He).load(Vi);let e=this.panel,i=u(aC,{optional:!0}),r=u(new kn("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(ue(a=>!!(a.hideToggle||a.togglePosition))):Pe;this.tabIndex=parseInt(r||"")||0,this._parentChangeSubscription=bn(e.opened,e.closed,o,e._inputChanges.pipe(ue(a=>!!(a.hideToggle||a.disabled||a.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(ue(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),i&&(this.expandedHeight=i.expandedHeight,this.collapsedHeight=i.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Li(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(i,r){i&1&&De("click",function(){return r._toggle()})("keydown",function(a){return r._keydown(a)}),i&2&&(le("id",r.panel._headerId)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r._getPanelId())("aria-expanded",r._isExpanded())("aria-disabled",r.panel.disabled),Lt("height",r._getHeaderHeight()),J("mat-expanded",r._isExpanded())("mat-expansion-toggle-indicator-after",r._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",r._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ns(e)]},ngContentSelectors:TN,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,r){i&1&&(Ie(SN),A(0,"span",0),q(1),q(2,1),q(3,2),B(),ye(4,kN,3,0,"span",1)),i&2&&(J("mat-content-hide-toggle",!r._showToggle()),w(4),be(r._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return t})(),lu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return t})(),du=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})(),uu=(()=>{class t extends nC{_keyManager;_ownHeaders=new Mn;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(pt(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Ns(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=k({type:t,selectors:[["mat-accordion"]],contentQueries:function(i,r,o){if(i&1&&at(o,Ys,5),i&2){let a;H(a=U())&&(r._headers=a)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(i,r){i&2&&J("mat-accordion-multi",r.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",Ce],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[Ge([{provide:hg,useExisting:t}]),We]})}return t})(),hu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[rC,Go,ge]})}return t})();var Zs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[jo,$D,ge]})}return t})();function cC(t){return Error(`Unable to find icon with the name "${t}"`)}function RN(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function lC(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function dC(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var si=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},hC=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new si(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(it.HTML,r);if(!a)throw dC(r);let s=Lo(a);return this._addSvgIconConfig(e,i,new si("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new si(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(it.HTML,i);if(!o)throw dC(i);let a=Lo(o);return this._addSvgIconSetConfig(e,new si("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(it.RESOURCE_URL,e);if(!i)throw lC(e);let r=this._cachedIconsByUrl.get(i);return r?L(mu(r)):this._loadSvgIconFromConfig(new si(e,null)).pipe(Ze(o=>this._cachedIconsByUrl.set(i,o)),ne(o=>mu(o)))}getNamedSvgIcon(e,i=""){let r=uC(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):aa(cC(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?L(mu(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ne(i=>mu(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return L(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(fi(s=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(it.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(l)),L(null)})));return Uu(o).pipe(ne(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw cC(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Ze(i=>e.svgText=i),ne(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?L(null):this._fetchIcon(e).pipe(Ze(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Lo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Lo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw RN();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(it.RESOURCE_URL,i);if(!a)throw lC(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(ne(l=>Lo(l)),Xi(()=>this._inProgressUrlFetches.delete(a)),da());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(uC(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return NN(o)?new si(o.url,null,o.options):new si(o,null)}}static \u0275fac=function(i){return new(i||t)(N($f,8),N(Wf),N(V,8),N(ut))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function mu(t){return t.cloneNode(!0)}function uC(t,n){return t+":"+n}function NN(t){return!!(t.url&&t.options)}var ON=["*"],FN=new _("MAT_ICON_DEFAULT_OPTIONS"),PN=new _("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(V),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),mC=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],LN=mC.map(t=>`[${t}]`).join(", "),VN=/^url\(['"]?#(.*?)['"]?\)$/,fu=(()=>{class t{_elementRef=u(j);_iconRegistry=u(hC);_location=u(PN);_errorHandler=u(ut);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=oe.EMPTY;constructor(){let e=u(new kn("aria-hidden"),{optional:!0}),i=u(FN,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(LN),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)mC.forEach(a=>{let s=i[o],c=s.getAttribute(a),l=c?c.match(VN):null;if(l){let d=r.get(s);d||(d=[],r.set(s,d)),d.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(lt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(le("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),It(r.color?"mat-"+r.color:""),J("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Ce],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:ON,decls:1,vars:0,template:function(i,r){i&1&&(Ie(),q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),pu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ge]})}return t})();var pC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();var gC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Zs,Zs,pC,ge]})}return t})();function jN(t,n){t&1&&z(0,"img",1)}function BN(t,n){t&1&&z(0,"img",2)}function HN(t,n){t&1&&z(0,"img",3)}function UN(t,n){t&1&&z(0,"img",4)}function zN(t,n){t&1&&z(0,"img",5)}var gu=class t{technologies=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-icon-widget"]],inputs:{technologies:"technologies"},decls:6,vars:5,consts:[[1,"icon-widget-container"],["src","library-icons/git.svg","alt","React"],["src","library-icons/angular.svg","alt","Angular"],["src","library-icons/react.svg","alt","React"],["src","library-icons/graphql.svg","alt","GraphQl"],["src","library-icons/android.svg","alt","Android"]],template:function(e,i){e&1&&(A(0,"div",0),ye(1,jN,1,0,"img",1),ye(2,BN,1,0,"img",2),ye(3,HN,1,0,"img",3),ye(4,UN,1,0,"img",4),ye(5,zN,1,0,"img",5),B()),e&2&&(w(),be(i.technologies.includes("Git")?1:-1),w(),be(i.technologies.includes("Angular")?2:-1),w(),be(i.technologies.includes("React")?3:-1),w(),be(i.technologies.includes("GraphQL")?4:-1),w(),be(i.technologies.includes("Android")?5:-1))},styles:["img[_ngcontent-%COMP%]{width:20px;height:20px}.icon-widget-container[_ngcontent-%COMP%]{display:flex;gap:5px}"]})};function $N(t,n){if(t&1&&(v(0,"div"),F(1,"Project Description:"),y(),v(2,"div"),F(3),y()),t&2){let e=n.$implicit;w(3),Qt(" ",e," ")}}var _u=class t{employmentHistory={};expanded=!1;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-employment-container"]],inputs:{employmentHistory:"employmentHistory",expanded:"expanded"},decls:22,vars:7,consts:[["multi","",1,"example-headers-align"],[3,"expanded"],[3,"technologies"],[1,"employment-details-container"]],template:function(e,i){e&1&&(v(0,"mat-accordion",0)(1,"mat-expansion-panel",1)(2,"mat-expansion-panel-header")(3,"mat-panel-title"),F(4),y(),v(5,"mat-panel-description")(6,"p"),F(7),y(),v(8,"mat-icon"),F(9,"work"),y(),X(10,"app-icon-widget",2),y()(),v(11,"div",3)(12,"div"),F(13,"Role"),y(),v(14,"div"),F(15),y(),v(16,"div"),F(17,"Duties:"),y(),v(18,"div"),F(19),y(),Ft(20,$N,4,1,null,null,vr),y()()()),e&2&&(w(),Q("expanded",i.expanded),w(3),Qt(" ",i.employmentHistory.company," "),w(3),yr("",i.employmentHistory.startDate," \u2013 ",i.employmentHistory.endDate),w(3),Q("technologies",i.employmentHistory.technologies),w(5),Je(i.employmentHistory.role),w(4),Je(i.employmentHistory.duties),w(),Pt(i.employmentHistory.projects))},dependencies:[ji,hu,uu,qs,Ys,du,lu,pu,fu,gu],styles:["mat-panel-description[_ngcontent-%COMP%]{display:flex;place-content:end}.employment-details-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;row-gap:10px;column-gap:10px}mat-icon[_ngcontent-%COMP%]{margin:0 10px}"]})};function WN(t,n){if(t&1&&X(0,"app-employment-container",15),t&2){let e=n.$implicit,i=n.$index;Q("employmentHistory",e)("expanded",i<3)}}var vu=class t{employmentHistories=M([]);chartOptions={chart:{type:"bar",backgroundColor:"#121316"},title:{text:"Skills Matrix",style:{color:"#ffffff"}},xAxis:{categories:["Analyzing client specifications","Android ","Angular ","Architecture review","ERD Diagrams ","Git ","HTML 5","Next JS","React","Refactoring code","SCSS","Testing ","Typescript ","Web components "],title:{text:null},gridLineWidth:1,lineWidth:0,gridLineColor:"#2b2b2b",labels:{style:{color:"#ffffff"}}},yAxis:{min:0,title:{text:"Years of experience",align:"high",style:{color:"#ffffff"}},labels:{overflow:"justify",style:{color:"#ffffff"}},gridLineWidth:1,gridLineColor:"#2b2b2b"},tooltip:{valueSuffix:" years",backgroundColor:"#121212",style:{color:"#ffffff"}},plotOptions:{bar:{borderRadius:"50%",color:"#3f51b5",dataLabels:{enabled:!0,color:"#ffffff"},groupPadding:.1}},credits:{enabled:!1},series:[{data:[10,3,8,10,12,12,10,2,2,12,10,8,10,8]}]};chartConstructor="chart";ngAfterViewInit(){this.loadEmploymentHistory()}loadEmploymentHistory(){fetch("/employment-history/employment-history.json").then(n=>{if(!n.ok)throw new Error(`Failed to load employment history (${n.status})`);return n.json()}).then(n=>{this.employmentHistories.set(n)}).catch(n=>{console.error(n)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-cv"]],features:[Ge([hD()])],decls:32,vars:3,consts:[[1,"cv-container"],[1,"heading-container"],[1,"content-container"],["multi","",1,"example-headers-align"],[3,"expanded"],[1,"profile-skills-container"],[1,"profile-container"],["src","profile.jpg","alt","Curriculum Vitae"],[1,"skills-container","highcharts-dark"],[1,"chart",3,"constructorType","options"],[1,"download-cv-container"],["href","cv.pdf","download","cv.pdf"],["matButton","","aria-label","download cv"],["iconPositionEnd",""],[1,"employment-history-container"],[3,"employmentHistory","expanded"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-accordion",3)(4,"mat-expansion-panel",4)(5,"mat-expansion-panel-header")(6,"mat-panel-title"),F(7," Dawie de Villiers - Software Engineer "),y(),v(8,"mat-panel-description")(9,"mat-icon"),F(10,"account_circle"),y()()(),v(11,"div",5)(12,"div",6),X(13,"img",7),v(14,"h3"),F(15,"Profile"),y(),v(16,"p"),F(17," Senior Web developer with extensive experience in Angular 4 \u2013 21, Recently worked with other SPA libraries such as React and Vue, Have managed and lead teams in high enterprise corporations and also trained junior developers. I have a knack for responsive front-ends and I have a passion for making UI\u2019s elegant and appealing to work with. "),y()(),v(18,"div",8),X(19,"highcharts-chart",9),y()(),v(20,"div",10)(21,"a",11)(22,"button",12),F(23," Download CV "),v(24,"mat-icon",13),F(25,"arrow_drop_down_circle"),y()()()()()()()(),v(26,"div",14)(27,"mat-card")(28,"h2"),F(29,"Employment details"),y()(),Ft(30,WN,1,2,"app-employment-container",15,vr),y()()),e&2&&(w(4),Q("expanded",!0),w(15),Q("constructorType",i.chartConstructor)("options",i.chartOptions),w(11),Pt(i.employmentHistories()))},dependencies:[ji,kr,hu,uu,qs,Ys,du,lu,pu,fu,Zs,gC,tC,Jt,On,xw,_u],styles:[".heading-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}.heading-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:100%;width:160px;padding:1rem 0}.content-container[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{pointer-events:none}.content-container[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]     .mat-expansion-indicator{display:none}mat-card[_ngcontent-%COMP%]{padding:0 24px;margin:16px 0}mat-panel-description[_ngcontent-%COMP%]{display:flex;place-content:end}.profile-skills-container[_ngcontent-%COMP%]{display:flex}.profile-skills-container[_ngcontent-%COMP%]   .profile-container[_ngcontent-%COMP%], .profile-skills-container[_ngcontent-%COMP%]   .skills-container[_ngcontent-%COMP%]{flex:1}.employment-history-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.download-cv-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;margin-top:1rem}"]})};var GN=new _("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var Zo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[uD,{provide:GN,useValue:{separatorKeyCodes:[13]}}],imports:[Uo,ge]})}return t})();var yu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-mandala"]],decls:169,vars:0,consts:[[1,"mandala-container"],["width","auto","height","auto","viewBox","0 0 1194 1194","fill","none","xmlns","http://www.w3.org/2000/svg"],["id","Group 1"],["id","OuterCircle"],["id","Ellipse 2","cx","598","cy","597.646","r","401.566","stroke","#108309","stroke-opacity","0.6","stroke-width","148"],["id","Ellipse 3","cx","598","cy","597.646","r","484.041","stroke","#130983","stroke-width","20"],["id","Component 2"],["id","Vector"],["id","Line 3","y1","-3","x2","145.902","y2","-3","transform","matrix(0.864888 -0.501964 0.501992 0.864873 370.035 350.895)","stroke","#0A5306","stroke-width","6"],["id","Polygon 1","d","M381.394 224.67L481.788 279.958L379.076 339.251L381.394 224.67Z","fill","#0A5306"],["id","Vector 1 (Stroke)","d","M392.727 244.298C391.545 247.867 391.444 253.64 391.672 262.311C391.889 270.548 392.346 280.722 391.638 291.642C390.208 313.686 384.008 339.372 361.506 362.15L353.105 353.7C373.002 333.559 378.574 310.952 379.889 290.681C380.553 280.445 380.124 270.955 379.9 262.443C379.688 254.368 379.59 246.306 381.554 240.374L392.727 244.298Z","fill","black"],["id","Vector 1 (Stroke)_2","d","M392.727 244.298C396.409 245.06 401.459 247.858 408.855 252.392C415.879 256.698 424.463 262.182 434.274 267.029C454.08 276.813 479.426 284.289 510.405 276.193L507.287 264.693C479.895 271.851 457.53 265.372 439.317 256.375C430.119 251.831 422.114 246.714 414.855 242.264C407.968 238.042 401.034 233.926 394.915 232.661L392.727 244.298Z","fill","black"],["id","Vector 1 (Stroke)_3","d","M382.517 226.615C386.355 227.646 391.713 230.978 399.583 236.333C407.058 241.419 416.203 247.876 426.581 253.704C447.53 265.468 474.067 275.006 505.573 267.824L501.739 255.083C473.881 261.433 450.47 253.145 431.207 242.328C421.478 236.865 412.949 230.839 405.224 225.583C397.895 220.596 390.524 215.723 384.147 214.01L382.517 226.615Z","fill","#577D55"],["id","Vector 1 (Stroke)_4","d","M382.517 226.615C381.491 230.454 381.697 236.759 382.4 246.252C383.067 255.269 384.087 266.417 383.944 278.318C383.657 302.341 378.649 330.09 356.674 353.781L347.557 344.09C366.987 323.142 371.515 298.725 371.779 276.635C371.912 265.479 370.959 255.08 370.269 245.762C369.615 236.922 369.08 228.102 370.785 221.724L382.517 226.615Z","fill","#577D55"],["id","Vector_2"],["id","Line 3_2","y1","-3","x2","145.897","y2","-3","transform","matrix(-0.492175 -0.870496 0.870535 -0.492106 349.37 817.395)","stroke","#0A5306","stroke-width","6"],["id","Polygon 1_2","d","M223.273 804.606L279.699 704.852L337.829 808.223L223.273 804.606Z","fill","#0A5306"],["id","Vector 1 (Stroke)_5","d","M243.03 793.498C246.586 794.719 252.358 794.887 261.031 794.756C269.27 794.633 279.45 794.291 290.362 795.123C312.389 796.803 338.005 803.293 360.528 826.05L351.983 834.355C332.067 814.232 309.523 808.404 289.268 806.86C279.039 806.08 269.544 806.4 261.03 806.528C252.952 806.649 244.889 806.655 238.98 804.625L243.03 793.498Z","fill","black"],["id","Vector 1 (Stroke)_6","d","M243.03 793.498C243.834 789.825 246.689 784.807 251.307 777.464C255.693 770.489 261.274 761.969 266.232 752.213C276.241 732.521 284.004 707.263 276.259 676.196L264.723 679.183C271.571 706.653 264.839 728.942 255.635 747.05C250.987 756.195 245.78 764.141 241.247 771.349C236.947 778.188 232.753 785.074 231.418 791.177L243.03 793.498Z","fill","black"],["id","Vector 1 (Stroke)_7","d","M225.231 803.505C226.306 799.68 229.698 794.36 235.142 786.552C240.314 779.136 246.875 770.065 252.82 759.754C264.821 738.941 274.661 712.516 267.835 680.932L255.051 684.622C261.085 712.548 252.532 735.862 241.496 755C235.923 764.665 229.801 773.126 224.457 780.79C219.387 788.061 214.43 795.376 212.645 801.733L225.231 803.505Z","fill","#577D55"],["id","Vector 1 (Stroke)_8","d","M225.232 803.505C229.058 804.575 235.366 804.44 244.867 803.845C253.891 803.28 265.051 802.387 276.951 802.664C300.97 803.224 328.662 808.546 352.105 830.787L342.31 839.793C321.582 820.128 297.217 815.324 275.129 814.81C263.975 814.55 253.565 815.385 244.24 815.969C235.392 816.523 226.566 816.958 220.207 815.18L225.232 803.505Z","fill","#577D55"],["id","Vector_3"],["id","Line 3_3","y1","-3","x2","145.904","y2","-3","transform","matrix(-0.999955 -0.00953539 0.0095606 -0.999954 666.552 919.205)","stroke","#0A5306","stroke-width","6"],["id","Polygon 1_3","d","M592.376 1021.97L534.243 923.2L652.835 924.606L592.376 1021.97Z","fill","#0A5306"],["id","Vector 1 (Stroke)_9","d","M592.645 999.306C595.482 996.839 598.515 991.926 602.743 984.352C606.759 977.158 611.558 968.174 617.739 959.143C630.216 940.915 648.655 921.986 679.63 913.876L682.543 925.43C655.155 932.601 638.827 949.201 627.353 965.964C621.559 974.429 617.085 982.81 612.935 990.244C608.998 997.298 604.968 1004.28 600.252 1008.38L592.645 999.306Z","fill","black"],["id","Vector 1 (Stroke)_10","d","M592.645 999.306C589.867 996.772 586.951 991.789 582.904 984.117C579.06 976.829 574.476 967.734 568.51 958.56C556.469 940.04 538.485 920.68 507.71 911.838L504.524 923.319C531.735 931.138 547.664 948.12 558.737 965.15C564.329 973.751 568.603 982.235 572.576 989.766C576.345 996.911 580.208 1003.99 584.825 1008.2L592.645 999.306Z","fill","black"],["id","Vector 1 (Stroke)_11","d","M592.403 1019.72C589.629 1016.88 586.72 1011.28 582.684 1002.66C578.851 994.471 574.28 984.251 568.328 973.944C556.314 953.139 538.358 931.397 507.596 921.501L504.392 934.415C531.592 943.166 547.497 962.237 558.545 981.369C564.125 991.031 568.386 1000.56 572.348 1009.03C576.106 1017.05 579.959 1025.01 584.57 1029.73L592.403 1019.72Z","fill","#577D55"],["id","Vector 1 (Stroke)_12","d","M592.403 1019.72C595.244 1016.94 598.285 1011.42 602.524 1002.89C606.55 994.799 611.362 984.691 617.557 974.528C630.061 954.014 648.528 932.703 679.516 923.539L682.412 936.525C655.012 944.629 638.66 963.318 627.161 982.182C621.354 991.709 616.868 1001.14 612.707 1009.5C608.759 1017.44 604.719 1025.3 599.997 1029.92L592.403 1019.72Z","fill","#577D55"],["id","Vector_4"],["id","Line 3_4","y1","-3","x2","145.902","y2","-3","transform","matrix(-0.868705 0.49533 -0.495357 -0.86869 820.072 840.221)","stroke","#0A5306","stroke-width","6"],["id","Polygon 1_4","d","M807.747 966.356L707.779 910.301L810.941 851.795L807.747 966.356Z","fill","#0A5306"],["id","Vector 1 (Stroke)_13","d","M796.564 946.641C797.773 943.081 797.919 937.309 797.757 928.636C797.603 920.398 797.224 910.221 798.016 899.306C799.615 877.275 806.011 851.637 828.686 829.031L837.022 837.546C816.972 857.534 811.227 880.098 809.757 900.357C809.014 910.588 809.37 920.082 809.529 928.594C809.68 936.671 809.716 944.734 807.707 950.65L796.564 946.641Z","fill","black"],["id","Vector 1 (Stroke)_14","d","M796.564 946.641C792.888 945.851 787.86 943.014 780.499 938.424C773.507 934.064 764.966 928.515 755.192 923.593C735.462 913.657 710.174 905.988 679.133 913.846L682.163 925.37C709.609 918.422 731.925 925.072 750.068 934.208C759.231 938.822 767.196 944 774.421 948.505C781.276 952.78 788.178 956.949 794.287 958.261L796.564 946.641Z","fill","black"],["id","Vector 1 (Stroke)_15","d","M806.638 964.402C802.809 963.341 797.476 959.969 789.648 954.554C782.212 949.41 773.116 942.883 762.783 936.976C741.925 925.052 715.462 915.311 683.901 922.252L687.638 935.022C715.544 928.885 738.89 937.352 758.07 948.317C767.757 953.854 776.24 959.944 783.924 965.26C791.215 970.303 798.548 975.232 804.912 976.994L806.638 964.402Z","fill","#577D55"],["id","Vector 1 (Stroke)_16","d","M806.638 964.401C807.694 960.571 807.536 954.264 806.906 944.766C806.308 935.745 805.374 924.589 805.607 912.689C806.078 888.669 811.299 860.96 833.454 837.437L842.497 847.198C822.907 867.997 818.192 892.378 817.759 914.466C817.541 925.62 818.414 936.026 819.033 945.349C819.619 954.194 820.086 963.017 818.332 969.383L806.638 964.401Z","fill","#577D55"],["id","Vector_5"],["id","Line 3_5","y1","-3","x2","145.897","y2","-3","transform","matrix(0.488385 -0.872628 0.872644 0.488358 278.832 498.081)","stroke","#0A5306","stroke-width","6"],["id","Polygon 1_5","d","M224.281 383.685L338.838 380.102L280.678 483.456L224.281 383.685Z","fill","#0A5306"],["id","Vector 1 (Stroke)_17","d","M244.035 394.8C244.837 398.473 247.691 403.492 252.307 410.836C256.691 417.813 262.269 426.334 267.225 436.091C277.228 455.786 284.983 481.046 277.23 512.111L265.695 509.121C272.551 481.653 265.825 459.362 256.626 441.251C251.981 432.104 246.776 424.157 242.245 416.948C237.947 410.108 233.755 403.221 232.422 397.117L244.035 394.8Z","fill","black"],["id","Vector 1 (Stroke)_18","d","M244.035 394.8C247.591 393.579 253.363 393.414 262.036 393.546C270.275 393.672 280.455 394.017 291.367 393.188C313.395 391.514 339.013 385.032 361.542 362.281L352.999 353.974C333.078 374.091 310.532 379.913 290.277 381.451C280.047 382.228 270.552 381.905 262.038 381.774C253.961 381.651 245.897 381.643 239.988 383.672L244.035 394.8Z","fill","black"],["id","Vector 1 (Stroke)_19","d","M226.239 384.787C230.066 383.719 236.374 383.855 245.874 384.453C254.899 385.02 266.058 385.916 277.958 385.643C301.977 385.09 329.671 379.776 353.12 357.542L343.328 348.533C322.594 368.192 298.228 372.989 276.14 373.497C264.985 373.754 254.576 372.916 245.251 372.329C236.403 371.772 227.578 371.335 221.218 373.111L226.239 384.787Z","fill","#577D55"],["id","Vector 1 (Stroke)_20","d","M226.239 384.787C227.312 388.613 230.703 393.933 236.145 401.743C241.314 409.161 247.872 418.234 253.815 428.546C265.81 449.363 275.642 475.79 268.807 507.372L256.024 503.679C262.067 475.754 253.52 452.439 242.489 433.297C236.919 423.63 230.799 415.168 225.458 407.503C220.39 400.23 215.435 392.913 213.652 386.556L226.239 384.787Z","fill","#577D55"],["id","Vector_6"],["id","Line 3_6","y1","-3","x2","145.897","y2","-3","transform","matrix(-0.498695 0.866777 -0.866794 -0.498668 913.107 693.831)","stroke","#0A5306","stroke-width","6"],["id","Polygon 1_6","d","M966.298 808.866L851.707 811.091L911.087 708.434L966.298 808.866Z","fill","#0A5306"],["id","Vector 1 (Stroke)_21","d","M946.677 797.518C945.918 793.835 943.124 788.783 938.596 781.384C934.295 774.357 928.818 765.769 923.979 755.954C914.21 736.142 906.754 710.792 914.875 679.821L926.374 682.948C919.193 710.333 925.654 732.702 934.638 750.921C939.174 760.122 944.285 768.13 948.729 775.392C952.946 782.283 957.056 789.219 958.317 795.339L946.677 797.518Z","fill","black"],["id","Vector 1 (Stroke)_22","d","M946.677 797.518C943.107 798.696 937.334 798.793 928.662 798.558C920.425 798.334 910.251 797.869 899.329 798.569C877.283 799.981 851.591 806.159 828.793 828.642L837.237 837.049C857.395 817.17 880.008 811.616 900.281 810.317C910.519 809.662 920.009 810.098 928.521 810.329C936.597 810.548 944.659 810.652 950.592 808.693L946.677 797.518Z","fill","black"],["id","Vector 1 (Stroke)_23","d","M964.353 807.741C960.514 808.764 954.208 808.553 944.715 807.842C935.698 807.168 924.55 806.139 912.648 806.272C888.624 806.54 860.869 811.526 837.158 833.48L846.843 842.605C867.808 823.192 892.23 818.684 914.322 818.438C925.479 818.314 935.878 819.275 945.195 819.973C954.035 820.634 962.855 821.176 969.236 819.476L964.353 807.741Z","fill","#577D55"],["id","Vector 1 (Stroke)_24","d","M964.353 807.741C963.325 803.903 959.998 798.542 954.649 790.669C949.568 783.19 943.118 774.04 937.298 763.658C925.55 742.701 916.033 716.158 923.241 684.659L935.98 688.504C929.606 716.355 937.876 739.771 948.679 759.042C954.135 768.774 960.153 777.308 965.404 785.036C970.385 792.369 975.253 799.743 976.961 806.121L964.353 807.741Z","fill","#577D55"],["id","Vector_7"],["id","Line 3_7","y1","-3","x2","145.897","y2","-3","transform","matrix(0.50246 0.864601 -0.864641 0.502391 840.924 369.249)","stroke","#0A5306","stroke-width","6"],["id","Polygon 1_7","d","M967.163 380.543L911.924 480.958L852.573 378.284L967.163 380.543Z","fill","#0A5306"],["id","Vector 1 (Stroke)_25","d","M947.539 391.885C943.969 390.705 938.196 390.606 929.524 390.839C921.287 391.061 911.113 391.523 900.191 390.82C878.146 389.402 852.455 383.216 829.663 360.727L838.11 352.322C858.263 372.207 880.874 377.768 901.146 379.072C911.384 379.73 920.875 379.297 929.386 379.068C937.462 378.852 945.525 378.75 951.457 380.711L947.539 391.885Z","fill","black"],["id","Vector 1 (Stroke)_26","d","M947.539 391.885C946.779 395.567 943.983 400.618 939.453 408.016C935.15 415.042 929.671 423.628 924.829 433.441C915.054 453.251 907.591 478.599 915.703 509.572L927.203 506.449C920.03 479.062 926.498 456.694 935.486 438.478C940.025 429.279 945.138 421.272 949.585 414.011C953.804 407.122 957.916 400.186 959.178 394.067L947.539 391.885Z","fill","black"],["id","Vector 1 (Stroke)_27","d","M965.218 381.667C964.189 385.504 960.86 390.864 955.509 398.736C950.426 406.213 943.973 415.362 938.15 425.742C926.396 446.695 916.871 473.235 924.07 504.736L936.81 500.896C930.445 473.042 938.721 449.629 949.53 430.361C954.988 420.631 961.009 412.099 966.262 404.372C971.245 397.041 976.115 389.667 977.825 383.29L965.218 381.667Z","fill","#577D55"],["id","Vector 1 (Stroke)_28","d","M965.218 381.667C961.379 380.643 955.073 380.852 945.58 381.559C936.563 382.231 925.414 383.256 913.513 383.121C889.488 382.846 861.735 377.852 838.03 355.891L847.718 346.769C868.677 366.187 893.098 370.702 915.19 370.955C926.347 371.082 936.746 370.124 946.063 369.429C954.904 368.77 963.724 368.231 970.104 369.933L965.218 381.667Z","fill","#577D55"],["id","Vector_8"],["id","Line 3_8","y1","-3","x2","145.902","y2","-3","transform","matrix(0.867207 0.497949 -0.498018 0.867167 696.736 278.406)","stroke","#0A5306","stroke-width","6"],["id","Polygon 1_8","d","M811.735 225.125L814.053 339.707L711.341 280.413L811.735 225.125Z","fill","#0A5306"],["id","Vector 1 (Stroke)_29","d","M800.402 244.754C796.72 245.515 791.67 248.314 784.274 252.847C777.25 257.154 768.666 262.637 758.855 267.484C739.049 277.268 713.703 284.744 682.724 276.648L685.842 265.148C713.234 272.306 735.599 265.827 753.812 256.83C763.01 252.286 771.015 247.17 778.274 242.72C785.161 238.497 792.095 234.382 798.214 233.116L800.402 244.754Z","fill","black"],["id","Vector 1 (Stroke)_30","d","M800.402 244.754C801.584 248.323 801.685 254.095 801.457 262.766C801.24 271.003 800.783 281.178 801.491 292.098C802.921 314.141 809.121 339.827 831.623 362.606L840.024 354.155C820.127 334.014 814.555 311.407 813.24 291.137C812.576 280.9 813.005 271.41 813.229 262.899C813.442 254.823 813.539 246.761 811.575 240.83L800.402 244.754Z","fill","black"],["id","Vector 1 (Stroke)_31","d","M810.612 227.07C811.638 230.909 811.432 237.215 810.729 246.707C810.062 255.724 809.042 266.872 809.185 278.773C809.472 302.796 814.48 330.545 836.455 354.237L845.572 344.545C826.142 323.597 821.614 299.18 821.35 277.09C821.217 265.934 822.17 255.535 822.86 246.217C823.514 237.377 824.049 228.558 822.343 222.179L810.612 227.07Z","fill","#577D55"],["id","Vector 1 (Stroke)_32","d","M810.612 227.07C806.774 228.101 801.416 231.433 793.546 236.788C786.071 241.874 776.926 248.332 766.548 254.16C745.599 265.923 719.062 275.461 687.556 268.279L691.39 255.538C719.248 261.889 742.658 253.601 761.922 242.783C771.651 237.32 780.18 231.295 787.905 226.038C795.234 221.051 802.605 216.178 808.982 214.465L810.612 227.07Z","fill","#577D55"],["id","Vector_9"],["id","Line 3_9","y1","-3","x2","145.901","y2","-3","transform","matrix(-0.860804 -0.508936 0.509005 -0.860763 494.328 911.095)","stroke","#0A5306","stroke-width","6"],["id","Polygon 1_9","d","M378.661 962.909L377.801 848.307L479.75 908.902L378.661 962.909Z","fill","#0A5306"],["id","Vector 1 (Stroke)_33","d","M390.243 943.426C393.934 942.711 399.019 939.977 406.472 935.538C413.551 931.321 422.203 925.947 432.076 921.225C452.005 911.694 477.443 904.541 508.317 913.03L505.054 924.49C477.754 916.984 455.308 923.178 436.983 931.943C427.728 936.369 419.659 941.384 412.343 945.741C405.403 949.875 398.417 953.902 392.283 955.09L390.243 943.426Z","fill","black"],["id","Vector 1 (Stroke)_34","d","M390.243 943.426C389.107 939.842 389.078 934.069 389.417 925.401C389.739 917.168 390.325 907 389.756 896.072C388.606 874.012 382.734 848.249 360.523 825.186L352.016 833.529C371.654 853.922 376.939 876.598 377.996 896.883C378.53 907.127 377.98 916.611 377.648 925.119C377.333 933.191 377.133 941.251 379.021 947.207L390.243 943.426Z","fill","black"],["id","Vector 1 (Stroke)_35","d","M379.809 960.978C378.832 957.126 379.118 950.824 379.942 941.341C380.724 932.334 381.885 921.199 381.894 909.297C381.912 885.273 377.257 857.462 355.585 833.493L346.345 843.068C365.508 864.262 369.725 888.734 369.708 910.826C369.699 921.983 368.614 932.368 367.806 941.676C367.039 950.508 366.392 959.32 368.016 965.72L379.809 960.978Z","fill","#577D55"],["id","Vector 1 (Stroke)_36","d","M379.809 960.978C383.66 959.996 389.06 956.733 396.997 951.478C404.536 946.487 413.763 940.146 424.214 934.451C445.311 922.955 471.967 913.755 503.38 921.337L499.384 934.029C471.608 927.324 448.094 935.314 428.695 945.886C418.898 951.225 410.292 957.141 402.501 962.298C395.109 967.192 387.677 971.971 381.279 973.603L379.809 960.978Z","fill","#577D55"],["id","Vector_10"],["id","Line 3_10","y1","-3","x2","145.895","y2","-3","transform","matrix(0.00477818 -0.999989 0.999989 0.00480153 272.159 666.595)","stroke","#0A5306","stroke-width","6"],["id","Polygon 1_10","d","M169.036 592.915L267.534 534.316L266.693 652.905L169.036 592.915Z","fill","#0A5306"],["id","Vector 1 (Stroke)_37","d","M191.702 593.075C194.183 595.901 199.11 598.91 206.705 603.102C213.919 607.083 222.926 611.839 231.986 617.976C250.275 630.366 269.293 648.713 277.551 679.647L266.01 682.615C258.708 655.263 242.029 639.015 225.211 627.622C216.718 621.869 208.315 617.435 200.861 613.321C193.788 609.417 186.785 605.421 182.663 600.725L191.702 593.075Z","fill","black"],["id","Vector 1 (Stroke)_38","d","M191.702 593.076C194.223 590.286 199.192 587.347 206.846 583.263C214.115 579.384 223.189 574.757 232.336 568.749C250.799 556.62 270.074 538.545 278.771 507.731L267.274 504.599C259.584 531.845 242.676 547.855 225.698 559.008C217.124 564.64 208.66 568.954 201.147 572.962C194.02 576.765 186.961 580.662 182.773 585.298L191.702 593.076Z","fill","black"],["id","Vector 1 (Stroke)_39","d","M171.283 592.931C174.114 590.143 179.7 587.208 188.301 583.132C196.472 579.259 206.67 574.64 216.949 568.64C237.698 556.527 259.356 538.469 269.107 507.662L256.177 504.52C247.555 531.76 228.558 547.754 209.478 558.893C199.842 564.518 190.328 568.824 181.885 572.826C173.874 576.622 165.941 580.513 161.236 585.145L171.283 592.931Z","fill","#577D55"],["id","Vector 1 (Stroke)_40","d","M171.283 592.931C174.075 595.758 179.618 598.772 188.161 602.97C196.276 606.958 206.407 611.722 216.6 617.867C237.175 630.273 258.574 648.637 267.887 679.579L254.913 682.537C246.679 655.178 227.911 638.915 208.991 627.507C199.436 621.746 189.984 617.305 181.599 613.184C173.643 609.274 165.765 605.272 161.126 600.573L171.283 592.931Z","fill","#577D55"],["id","Vector_11"],["id","Line 3_11","y1","-3","x2","145.895","y2","-3","transform","matrix(0.00707706 0.999975 -0.999975 0.00705218 920.054 520.767)","stroke","#0A5306","stroke-width","6"],["id","Polygon 1_11","d","M1024.04 593.22L926.247 652.982L925.683 534.392L1024.04 593.22Z","fill","#0A5306"],["id","Vector 1 (Stroke)_41","d","M1001.38 593.328C998.863 590.533 993.9 587.582 986.257 583.48C978.996 579.585 969.933 574.936 960.8 568.907C942.366 556.735 923.132 538.615 914.508 507.78L926.013 504.675C933.638 531.94 950.509 547.988 967.461 559.181C976.022 564.834 984.476 569.167 991.979 573.193C999.098 577.013 1006.15 580.926 1010.32 585.572L1001.38 593.328Z","fill","black"],["id","Vector 1 (Stroke)_42","d","M1001.38 593.328C998.89 596.148 993.955 599.146 986.351 603.319C979.128 607.284 970.109 612.018 961.035 618.135C942.717 630.482 923.657 648.784 915.326 679.699L926.86 682.694C934.226 655.359 950.943 639.15 967.787 627.797C976.294 622.063 984.707 617.649 992.171 613.552C999.253 609.665 1006.27 605.685 1010.4 600.999L1001.38 593.328Z","fill","black"],["id","Vector 1 (Stroke)_43","d","M1021.8 593.231C1019 596.052 1013.45 599.053 1004.9 603.231C996.771 607.2 986.628 611.94 976.421 618.062C955.817 630.419 934.375 648.733 924.99 679.653L937.957 682.641C946.255 655.302 965.061 639.083 984.008 627.719C993.576 621.981 1003.04 617.562 1011.43 613.46C1019.4 609.569 1027.29 605.585 1031.94 600.897L1021.8 593.231Z","fill","#577D55"],["id","Vector 1 (Stroke)_44","d","M1021.8 593.231C1018.97 590.437 1013.39 587.489 1004.8 583.392C996.639 579.501 986.452 574.858 976.187 568.833C955.466 556.672 933.851 538.563 924.172 507.734L937.11 504.622C945.668 531.882 964.627 547.921 983.681 559.104C993.304 564.751 1002.81 569.08 1011.24 573.101C1019.24 576.916 1027.17 580.826 1031.86 585.469L1021.8 593.231Z","fill","#577D55"],["id","Vector_12"],["id","Line 3_12","y1","-3","x2","145.904","y2","-3","transform","matrix(0.999997 -0.00231825 0.00229457 0.999997 523.656 271.12)","stroke","#0A5306","stroke-width","6"],["id","Polygon 1_12","d","M596.608 167.483L655.908 265.557H537.308L596.608 167.483Z","fill","#0A5306"],["id","Vector 1 (Stroke)_45","d","M596.608 190.148C593.8 192.649 590.826 197.597 586.688 205.221C582.757 212.462 578.065 221.502 571.992 230.606C559.731 248.981 541.519 268.127 510.642 276.604L507.592 265.085C534.894 257.59 551.024 240.797 562.298 223.9C567.991 215.366 572.365 206.933 576.427 199.45C580.28 192.35 584.227 185.319 588.894 181.164L596.608 190.148Z","fill","black"],["id","Vector 1 (Stroke)_46","d","M596.608 190.148C599.416 192.649 602.39 197.597 606.528 205.221C610.459 212.462 615.15 221.502 621.224 230.606C633.484 248.981 651.697 268.127 682.574 276.604L685.624 265.085C658.322 257.59 642.192 240.797 630.918 223.9C625.225 215.366 620.85 206.933 616.789 199.45C612.935 192.35 608.988 185.319 604.322 181.164L596.608 190.148Z","fill","black"],["id","Vector 1 (Stroke)_47","d","M596.608 169.73C599.416 172.541 602.39 178.105 606.528 186.677C610.459 194.82 615.15 204.984 621.224 215.22C633.484 235.881 651.697 257.408 682.574 266.94L685.624 253.989C658.322 245.561 642.192 226.679 630.918 207.68C625.225 198.085 620.85 188.603 616.789 180.188C612.935 172.205 608.988 164.3 604.322 159.628L596.608 169.73Z","fill","#577D55"],["id","Vector 1 (Stroke)_48","d","M596.608 169.73C593.8 172.541 590.825 178.105 586.688 186.677C582.757 194.82 578.065 204.984 571.992 215.22C559.731 235.881 541.519 257.408 510.642 266.94L507.592 253.989C534.893 245.561 551.023 226.679 562.297 207.68C567.991 198.085 572.365 188.603 576.427 180.188C580.28 172.205 584.227 164.3 588.894 159.628L596.608 169.73Z","fill","#577D55"],["id","InnerCircle"],["id","Ellipse 1","cx","597","cy","596.646","r","280.222","fill","#D9D9D9","fill-opacity","0.31","stroke","#1B70AC","stroke-width","111"],["id","Component 1","opacity","0.5"],["x","288.5","y","289.365","width","617","height","616","stroke","#1B70AC"],["id","Vector_13"],["id","Line 1","y1","-9","x2","72.9288","y2","-9","transform","matrix(0.872071 -0.48938 0.490163 0.871631 533.104 359.627)","stroke","#040084","stroke-width","18"],["id","Line 2","y1","-9","x2","72.9288","y2","-9","transform","matrix(-0.872071 -0.48938 -0.490163 0.871631 660.302 359.627)","stroke","#040084","stroke-width","18"],["id","Vector 7","d","M596.703 308.051V308.355","stroke","#040084","stroke-width","32","stroke-linecap","round"],["id","Line 4","y1","-0.5","x2","74.2256","y2","-0.5","transform","matrix(0.870616 0.491964 -0.492748 0.870172 595.68 323.11)","stroke","#15A2E3"],["id","Line 5","y1","-0.5","x2","73.7401","y2","-0.5","transform","matrix(-0.862477 0.506097 -0.506889 -0.862012 596.703 322.307)","stroke","#15A2E3"],["id","Vector_14"],["id","Line 1_2","y1","-9","x2","72.9288","y2","-9","transform","matrix(-0.87145 0.490482 -0.491267 -0.87101 660.604 834.922)","stroke","#040084","stroke-width","18"],["id","Line 2_2","y1","-9","x2","72.9288","y2","-9","transform","matrix(0.87269 0.488276 0.489058 -0.87225 533.406 835.083)","stroke","#040084","stroke-width","18"],["id","Vector 7_2","d","M597.07 886.578L597.07 886.274","stroke","#040084","stroke-width","32","stroke-linecap","round"],["id","Line 4_2","y1","-0.5","x2","74.2256","y2","-0.5","transform","matrix(-0.871238 -0.490862 0.491645 -0.870794 598.074 871.517)","stroke","#15A2E3"],["id","Line 5_2","y1","-0.5","x2","73.7401","y2","-0.5","transform","matrix(0.861835 -0.507187 0.507981 0.86137 597.052 872.322)","stroke","#15A2E3"],["id","Vector_15"],["id","Line 1_3","y1","-9","x2","72.8989","y2","-9","transform","matrix(0.0120736 -0.999538 1.00032 0.0120577 358.916 533.616)","stroke","#040084","stroke-width","18"],["id","Line 2_3","y1","-9","x2","72.8989","y2","-9","transform","matrix(-0.8608 0.509708 0.510105 0.85966 422.548 423.593)","stroke","#040084","stroke-width","18"],["id","Vector 7_3","d","M346.027 452.803L346.29 452.955","stroke","#040084","stroke-width","32","stroke-linecap","round"],["id","Line 4_3","y1","-0.5","x2","74.1954","y2","-0.5","transform","matrix(0.862309 -0.507153 0.50755 0.861169 358.568 461.222)","stroke","#15A2E3"],["id","Line 5_3","y1","-0.5","x2","73.7118","y2","-0.5","transform","matrix(0.00722353 0.999576 -1.00037 0.00721403 358.384 459.935)","stroke","#15A2E3"],["id","Vector_16"],["id","Line 1_4","y1","-9","x2","72.8989","y2","-9","transform","matrix(-0.0108069 0.999553 -1.00033 -0.0107926 834.679 661.101)","stroke","#040084","stroke-width","18"],["id","Line 2_4","y1","-9","x2","72.8989","y2","-9","transform","matrix(0.860154 -0.510796 -0.511194 -0.859014 771.187 771.204)","stroke","#040084","stroke-width","18"],["id","Vector 7_4","d","M847.672 741.897L847.408 741.746","stroke","#040084","stroke-width","32","stroke-linecap","round"],["id","Line 4_4","y1","-0.5","x2","74.1954","y2","-0.5","transform","matrix(-0.861666 0.508244 -0.50864 -0.860526 835.119 733.495)","stroke","#15A2E3"],["id","Line 5_4","y1","-0.5","x2","73.7117","y2","-0.5","transform","matrix(-0.00849032 -0.999566 1.00036 -0.0084792 835.305 734.781)","stroke","#15A2E3"],["id","Vector_17"],["id","Line 1_5","y1","-9","x2","72.9188","y2","-9","transform","matrix(0.509337 -0.860114 0.861254 0.508941 422.45 423.548)","stroke","#040084","stroke-width","18"],["id","Line 2_5","y1","-9","x2","72.9188","y2","-9","transform","matrix(-1.00031 0.0129486 0.0129657 0.999526 532.532 359.885)","stroke","#040084","stroke-width","18"],["id","Vector 7_5","d","M451.623 347.081L451.775 347.344","stroke","#040084","stroke-width","32","stroke-linecap","round"],["id","Line 4_5","y1","-0.5","x2","74.2155","y2","-0.5","transform","matrix(1.00034 -0.00998361 0.00999674 0.999559 458.291 360.626)","stroke","#15A2E3"],["id","Line 5_5","y1","-0.5","x2","73.7306","y2","-0.5","transform","matrix(-0.492643 0.869774 -0.870911 -0.492251 458.773 359.419)","stroke","#15A2E3"],["id","Vector_18"],["id","Line 1_6","y1","-9","x2","72.9188","y2","-9","transform","matrix(-0.508247 0.860758 -0.861898 -0.507851 771.179 771.07)","stroke","#040084","stroke-width","18"],["id","Line 2_6","y1","-9","x2","72.9188","y2","-9","transform","matrix(1.00029 -0.0142136 -0.0142326 -0.999509 661.178 834.872)","stroke","#040084","stroke-width","18"],["id","Vector 7_6","d","M742.103 847.574L741.95 847.311","stroke","#040084","stroke-width","32","stroke-linecap","round"],["id","Line 4_6","y1","-0.5","x2","74.2154","y2","-0.5","transform","matrix(-1.00033 0.0112487 -0.0112636 -0.999545 735.418 834.037)","stroke","#15A2E3"],["id","Line 5_6","y1","-0.5","x2","73.7305","y2","-0.5","transform","matrix(0.491541 -0.870396 0.871533 0.491149 734.937 835.245)","stroke","#15A2E3"],["id","Vector_19"],["id","Line 1_7","y1","-9","x2","72.8988","y2","-9","transform","matrix(0.859855 0.511298 -0.511695 0.858715 771.376 423.577)","stroke","#040084","stroke-width","18"],["id","Line 2_7","y1","-9","x2","72.8988","y2","-9","transform","matrix(-0.0102229 -0.999559 -1.00034 0.0102095 834.804 533.717)","stroke","#040084","stroke-width","18"],["id","Vector 7_7","d","M847.843 452.928L847.58 453.08","stroke","#040084","stroke-width","32","stroke-linecap","round"],["id","Line 4_7","y1","-0.5","x2","74.1954","y2","-0.5","transform","matrix(0.00725387 0.999584 -1.00036 0.0072444 834.266 459.552)","stroke","#15A2E3"],["id","Line 5_7","y1","-0.5","x2","73.7117","y2","-0.5","transform","matrix(-0.869558 -0.494635 0.495028 -0.86842 835.473 460.037)","stroke","#15A2E3"],["id","Vector_20"],["id","Line 1_8","y1","-9","x2","72.8989","y2","-9","transform","matrix(-0.860502 -0.51021 0.510607 -0.859362 422.534 770.985)","stroke","#040084","stroke-width","18"],["id","Line 2_8","y1","-9","x2","72.8989","y2","-9","transform","matrix(0.0114898 0.999545 1.00032 -0.0114746 358.967 660.925)","stroke","#040084","stroke-width","18"],["id","Vector 7_8","d","M346.03 741.73L346.293 741.578","stroke","#040084","stroke-width","32","stroke-linecap","round"],["id","Line 4_8","y1","-0.5","x2","74.1954","y2","-0.5","transform","matrix(-0.00852077 -0.999573 1.00035 -0.00850949 359.599 735.089)","stroke","#15A2E3"],["id","Line 5_8","y1","-0.5","x2","73.7117","y2","-0.5","transform","matrix(0.870184 0.493534 -0.493927 0.869046 358.391 734.606)","stroke","#15A2E3"],["id","Vector_21"],["id","Line 1_9","y1","-9","x2","72.9189","y2","-9","transform","matrix(1.00033 0.0105858 -0.0105999 0.999555 660.365 359.539)","stroke","#040084","stroke-width","18"],["id","Line 2_9","y1","-9","x2","72.9189","y2","-9","transform","matrix(-0.511371 -0.858908 -0.860048 0.510974 770.597 422.941)","stroke","#040084","stroke-width","18"],["id","Vector 7_9","d","M741.243 346.544L741.092 346.807","stroke","#040084","stroke-width","32","stroke-linecap","round"],["id","Line 4_9","y1","-0.5","x2","74.2156","y2","-0.5","transform","matrix(0.508819 0.860421 -0.861561 0.508422 732.835 359.085)","stroke","#15A2E3"],["id","Line 5_9","y1","-0.5","x2","73.7307","y2","-0.5","transform","matrix(-1.00036 0.00868596 -0.0086973 -0.999565 734.122 358.898)","stroke","#15A2E3"],["id","Vector_22"],["id","Line 1_10","y1","-9","x2","72.9189","y2","-9","transform","matrix(-1.00034 -0.00932068 0.00933302 -0.999569 533.446 834.989)","stroke","#040084","stroke-width","18"],["id","Line 2_10","y1","-9","x2","72.9189","y2","-9","transform","matrix(0.512459 0.85826 0.8594 -0.512062 423.134 771.726)","stroke","#040084","stroke-width","18"],["id","Vector 7_10","d","M452.584 848.087L452.736 847.823","stroke","#040084","stroke-width","32","stroke-linecap","round"],["id","Line 4_10","y1","-0.5","x2","74.2156","y2","-0.5","transform","matrix(-0.509908 -0.859776 0.860916 -0.509512 460.977 835.535)","stroke","#15A2E3"],["id","Line 5_10","y1","-0.5","x2","73.7307","y2","-0.5","transform","matrix(1.00035 -0.0099511 0.00996418 0.999554 459.69 835.723)","stroke","#15A2E3"],["id","Vector_23"],["id","Line 1_11","y1","-9","x2","72.8889","y2","-9","transform","matrix(0.487126 0.873328 -0.873769 0.486348 835.108 534.465)","stroke","#040084","stroke-width","18"],["id","Line 2_11","y1","-9","x2","72.8889","y2","-9","transform","matrix(0.493194 -0.869923 -0.870362 -0.492406 834.665 661.528)","stroke","#040084","stroke-width","18"],["id","Vector 7_11","d","M886.517 598.176L886.212 598.175","stroke","#040084","stroke-width","32","stroke-linecap","round"],["id","Line 4_11","y1","-0.5","x2","74.1854","y2","-0.5","transform","matrix(-0.495774 0.868455 -0.868898 -0.494985 871.445 597.102)","stroke","#15A2E3"],["id","Line 5_11","y1","-0.5","x2","73.7023","y2","-0.5","transform","matrix(-0.503885 -0.863767 0.864233 -0.503098 872.245 598.126)","stroke","#15A2E3"],["id","Vector_24"],["id","Line 1_12","y1","-9","x2","72.8889","y2","-9","transform","matrix(-0.488232 -0.872711 0.873152 -0.487452 358.872 660.177)","stroke","#040084","stroke-width","18"],["id","Line 2_12","y1","-9","x2","72.8889","y2","-9","transform","matrix(-0.492091 0.870546 0.870986 0.491305 359.153 533.112)","stroke","#040084","stroke-width","18"],["id","Vector 7_12","d","M307.382 596.531L307.687 596.531","stroke","#040084","stroke-width","32","stroke-linecap","round"],["id","Line 4_12","y1","-0.5","x2","74.1854","y2","-0.5","transform","matrix(0.494673 -0.869081 0.869525 0.493885 322.456 597.586)","stroke","#15A2E3"],["id","Line 5_12","y1","-0.5","x2","73.7023","y2","-0.5","transform","matrix(0.504979 0.863129 -0.863595 0.504191 321.654 596.562)","stroke","#15A2E3"],["id","Ellipse 3_2","cx","596.013","cy","596.201","r","224.244","stroke","#130983","stroke-width","10"],["id","Ellipse 4","cx","598","cy","596.646","r","329.895","stroke","#130983","stroke-width","10"]],template:function(e,i){e&1&&(A(0,"div",0),bt(),A(1,"svg",1)(2,"g",2)(3,"g",3),z(4,"circle",4)(5,"circle",5),A(6,"g",6)(7,"g",7),z(8,"line",8)(9,"path",9)(10,"path",10)(11,"path",11)(12,"path",12)(13,"path",13),B(),A(14,"g",14),z(15,"line",15)(16,"path",16)(17,"path",17)(18,"path",18)(19,"path",19)(20,"path",20),B(),A(21,"g",21),z(22,"line",22)(23,"path",23)(24,"path",24)(25,"path",25)(26,"path",26)(27,"path",27),B(),A(28,"g",28),z(29,"line",29)(30,"path",30)(31,"path",31)(32,"path",32)(33,"path",33)(34,"path",34),B(),A(35,"g",35),z(36,"line",36)(37,"path",37)(38,"path",38)(39,"path",39)(40,"path",40)(41,"path",41),B(),A(42,"g",42),z(43,"line",43)(44,"path",44)(45,"path",45)(46,"path",46)(47,"path",47)(48,"path",48),B(),A(49,"g",49),z(50,"line",50)(51,"path",51)(52,"path",52)(53,"path",53)(54,"path",54)(55,"path",55),B(),A(56,"g",56),z(57,"line",57)(58,"path",58)(59,"path",59)(60,"path",60)(61,"path",61)(62,"path",62),B(),A(63,"g",63),z(64,"line",64)(65,"path",65)(66,"path",66)(67,"path",67)(68,"path",68)(69,"path",69),B(),A(70,"g",70),z(71,"line",71)(72,"path",72)(73,"path",73)(74,"path",74)(75,"path",75)(76,"path",76),B(),A(77,"g",77),z(78,"line",78)(79,"path",79)(80,"path",80)(81,"path",81)(82,"path",82)(83,"path",83),B(),A(84,"g",84),z(85,"line",85)(86,"path",86)(87,"path",87)(88,"path",88)(89,"path",89)(90,"path",90),B()()(),A(91,"g",91),z(92,"circle",92),A(93,"g",93),z(94,"rect",94),A(95,"g",95),z(96,"line",96)(97,"line",97)(98,"path",98)(99,"line",99)(100,"line",100),B(),A(101,"g",101),z(102,"line",102)(103,"line",103)(104,"path",104)(105,"line",105)(106,"line",106),B(),A(107,"g",107),z(108,"line",108)(109,"line",109)(110,"path",110)(111,"line",111)(112,"line",112),B(),A(113,"g",113),z(114,"line",114)(115,"line",115)(116,"path",116)(117,"line",117)(118,"line",118),B(),A(119,"g",119),z(120,"line",120)(121,"line",121)(122,"path",122)(123,"line",123)(124,"line",124),B(),A(125,"g",125),z(126,"line",126)(127,"line",127)(128,"path",128)(129,"line",129)(130,"line",130),B(),A(131,"g",131),z(132,"line",132)(133,"line",133)(134,"path",134)(135,"line",135)(136,"line",136),B(),A(137,"g",137),z(138,"line",138)(139,"line",139)(140,"path",140)(141,"line",141)(142,"line",142),B(),A(143,"g",143),z(144,"line",144)(145,"line",145)(146,"path",146)(147,"line",147)(148,"line",148),B(),A(149,"g",149),z(150,"line",150)(151,"line",151)(152,"path",152)(153,"line",153)(154,"line",154),B(),A(155,"g",155),z(156,"line",156)(157,"line",157)(158,"path",158)(159,"line",159)(160,"line",160),B(),A(161,"g",161),z(162,"line",162)(163,"line",163)(164,"path",164)(165,"line",165)(166,"line",166),B(),z(167,"circle",167),B(),z(168,"circle",168),B()()()())},styles:[".mandala-container[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#f000}#OuterCircle[_ngcontent-%COMP%]{transform-origin:center;animation:_ngcontent-%COMP%_rotateCounterClockwise 300s linear infinite}#InnerCircle[_ngcontent-%COMP%]{transform-origin:center;animation:_ngcontent-%COMP%_rotate 300s linear infinite}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_rotateCounterClockwise{0%{transform:rotate(0)}to{transform:rotate(-360deg)}}"]})};var qN=["scene"],bu=class t{sceneElement;constructor(){$a(()=>{let n=this.sceneElement.nativeElement,e=new Parallax(n,{relativeInput:!0,hoverOnly:!0})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-home"]],viewQuery:function(e,i){if(e&1&&Te(qN,5),e&2){let r;H(r=U())&&(i.sceneElement=r.first)}},decls:7,vars:0,consts:[["scene",""],["id","scene",1,"home-container"],["_ngcontent-ng-c1451961802","","_ngcontent-ng-c3200276327","","data-depth","0.05","id","frame-svg","width","100%","height","100%","viewBox","0 0 3200 1500","fill","none","xmlns","http://www.w3.org/2000/svg",2,"transform","translate3d(1.2px, -0.2px, 0px)","transform-style","preserve-3d","backface-visibility","hidden","position","relative","display","block","left","0px","top","0px"],["_ngcontent-ng-c1451961802","","_ngcontent-ng-c3200276327","","x","40","y","40","width","3120","height","1400","stroke","#1B70AC","stroke-width","80"],["_ngcontent-ng-c1451961802","","_ngcontent-ng-c3200276327","","x","79.6489","y","76.0543","width","3033.08","height","1330.32","stroke","#D3AF37","stroke-width","16"],["data-depth","0.01",1,"mandala-container"]],template:function(e,i){e&1&&(v(0,"div",1,0),bt(),v(2,"svg",2),X(3,"rect",3)(4,"rect",4),y(),xi(),v(5,"div",5),X(6,"app-mandala"),y()())},dependencies:[Jt,Ho,Zo,yu],styles:[".home-container[_ngcontent-%COMP%]{height:100%;flex-direction:column;box-sizing:border-box;display:flex;place-content:center space-around;align-items:center;position:relative}.home-container[_ngcontent-%COMP%]{height:100%}.mandala-container[_ngcontent-%COMP%]{position:absolute;inset:0;width:500px;height:500px;margin:auto}#frame-svg[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto}.hero-copy[_ngcontent-%COMP%]{background:#0f172adb}.hero-copy[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{margin-top:.75rem;line-height:1.2;color:#f2f5ff}.hero-copy[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{margin-top:.6rem;color:#dbe2ff}@keyframes _ngcontent-%COMP%_slow-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media(max-width:860px){.home-container[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media screen and (max-width:1100px){.mandala-container[_ngcontent-%COMP%]{width:300px;height:300px}}@media screen and (max-width:700px){.mandala-container[_ngcontent-%COMP%]{width:150px;height:150px}}"]})};var wu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-quotes"]],decls:14,vars:0,consts:[[1,"page-card"],["role","list"],["role","listitem"]],template:function(e,i){e&1&&(v(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),F(3,"Quotes Collection"),y()(),v(4,"mat-card-content")(5,"mat-list",1)(6,"mat-list-item",2),F(7,'"Simplicity is the ultimate sophistication."'),y(),X(8,"mat-divider"),v(9,"mat-list-item",2),F(10,'"We shape our tools and thereafter our tools shape us."'),y(),X(11,"mat-divider"),v(12,"mat-list-item",2),F(13,'"The details are not the details. They make the design."'),y()()()())},dependencies:[Jt,On,Ni,No,Ro,Yd,rD,oD,Lp,Ho],styles:[".page-card[_ngcontent-%COMP%]{max-width:900px;background:#0f172adb}.page-card[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{color:#dbe2ff}"]})};var Du=class t{technologyItem={};static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-tech-tile"]],inputs:{technologyItem:"technologyItem"},decls:13,vars:10,consts:[[1,"tech-tile-container"],["appearance","outlined"],[1,"title-container"],[1,"image-container"],["alt","Angular",1,"tech-tile-image",3,"src"],["target","_blank","rel","noopener",3,"href"],["alt","Angular",1,"background-shadow-image",3,"src"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"mat-card",1)(2,"div",2)(3,"div",3),X(4,"img",4),y(),v(5,"h3"),F(6),y()(),v(7,"mat-card-content")(8,"p"),F(9),y(),v(10,"a",5),F(11,"Learn more..."),y()()(),X(12,"img",6),y()),e&2&&(Lt("--hover-color",i.technologyItem.color),w(4),Q("src",Xa(i.technologyItem.image),Jn),w(2),Je(i.technologyItem.name),w(3),Je(i.technologyItem.description),w(),Q("href",Xa(i.technologyItem.url),Jn),w(2),Q("src",Xa(i.technologyItem.image),Jn))},dependencies:[Jt,On,Ni,Zo],styles:[".tech-tile-container[_ngcontent-%COMP%]{position:relative;border:1px solid transparent;border-radius:12px}mat-card[_ngcontent-%COMP%]{padding:1rem;background-color:#000000b5}mat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}mat-card[_ngcontent-%COMP%]{z-index:1}.title-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:1rem}.image-container[_ngcontent-%COMP%]{padding:.7rem}.tech-tile-image[_ngcontent-%COMP%]{transition:all .3s ease-in-out;width:40px}.background-shadow-image[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;width:60%;height:60%;opacity:1;z-index:0;opacity:.1;transition:all .3s ease-in-out}.tech-tile-container[_ngcontent-%COMP%]:hover{border-color:var(--hover-color, blue)}.tech-tile-container[_ngcontent-%COMP%]:hover   .tech-tile-image[_ngcontent-%COMP%]{transform:scale(1.1)}.tech-tile-container[_ngcontent-%COMP%]:hover   .background-shadow-image[_ngcontent-%COMP%]{opacity:.9;transform:scale(1.1)}"]})};function YN(t,n){if(t&1&&X(0,"app-tech-tile",2),t&2){let e=n.$implicit;Q("technologyItem",e)}}var Cu=class t{technologyItems=M([]);ngAfterViewInit(){this.loadTechnologyItems()}loadTechnologyItems(){fetch("/technologies-used/technologies.json").then(n=>{if(!n.ok)throw new Error(`Failed to load technology history (${n.status})`);return n.json()}).then(n=>{this.technologyItems.set(n)}).catch(n=>{console.error(n)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-technology-stack"]],decls:7,vars:0,consts:[[1,"page-card"],[1,"stack-grid"],[3,"technologyItem"]],template:function(e,i){e&1&&(v(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),F(3,"Technology Stack"),y()(),v(4,"mat-card-content",1),Ft(5,YN,1,1,"app-tech-tile",2,vr),y()()),e&2&&(w(5),Pt(i.technologyItems()))},dependencies:[Jt,On,Ni,No,Ro,Zo,Du],styles:[".page-card[_ngcontent-%COMP%]{background:#0f172adb}.stack-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(333px,1fr));gap:1rem}.stack-grid[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{background:#082f492e}"]})};var _C=[{path:"",component:bu},{path:"about-me",title:"About Me",component:Zd},{path:"cv",title:"Curriculum Vitae",component:vu},{path:"technology-stack",title:"Technology Stack",component:Cu},{path:"quotes",title:"Quotes",component:wu},{path:"**",redirectTo:""}];var vC={providers:[Gh(),bp(_C),Ew()]};var ZN=["*",[["mat-toolbar-row"]]],QN=["*","mat-toolbar-row"],KN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),yC=(()=>{class t{_elementRef=u(j);_platform=u(me);_document=u(V);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&at(o,KN,5),i&2){let a;H(a=U())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(It(r.color?"mat-"+r.color:""),J("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:QN,decls:2,vars:0,template:function(i,r){i&1&&(Ie(ZN),q(0),q(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var bC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ge]})}return t})();var JN=()=>({exact:!0}),xu=class t{title=M("my-first-app");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-root"]],decls:15,vars:2,consts:[[1,"main-container"],[1,"top-nav"],[1,"site-title"],[1,"nav-links"],["mat-button","","routerLink","/","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["mat-button","","routerLink","/about-me","routerLinkActive","active-link"],["mat-button","","routerLink","/technology-stack","routerLinkActive","active-link"],["mat-button","","routerLink","/cv","routerLinkActive","active-link"],[1,"router-container"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"mat-toolbar",1)(2,"span",2),F(3,"Scientia Ecclesia"),y(),v(4,"nav",3)(5,"a",4),F(6,"Home"),y(),v(7,"a",5),F(8,"About Me"),y(),v(9,"a",6),F(10,"Technology Stack"),y(),v(11,"a",7),F(12,"Curriculum Vitae"),y()()(),v(13,"main",8),X(14,"router-outlet"),y()()),e&2&&(w(5),Q("routerLinkActiveOptions",Cf(1,JN)))},dependencies:[Es,Ao,yp,bC,yC,ji,kr],styles:['.main-container[_ngcontent-%COMP%]{height:100%;background-size:cover;background-image:url("./media/epic-MXDRLL7F.jpg");background-repeat:no-repeat;background-position:center;position:relative;display:flex;flex-direction:column}.top-nav[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;display:flex;flex-direction:column;align-items:center;gap:.75rem;background:#10172aeb;border-bottom:1px solid rgba(255,255,255,.08);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.site-title[_ngcontent-%COMP%]{font-size:1.1rem;letter-spacing:.03em;font-weight:600;color:#e8ecff}.nav-links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.25rem;justify-content:center}.nav-links[_ngcontent-%COMP%]   a.active-link[_ngcontent-%COMP%]{background:#90caf938;color:#f3f6ff}.router-container[_ngcontent-%COMP%]{padding:2rem;flex:1}@media(max-width:900px){.top-nav[_ngcontent-%COMP%]{height:auto;min-height:64px;padding:.6rem .75rem;align-items:center}}']})};jf(xu,vC).catch(t=>console.error(t));
