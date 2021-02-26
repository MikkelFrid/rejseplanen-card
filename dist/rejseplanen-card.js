customElements.define("rejseplanen-card",class extends HTMLElement{set hass(n){const e=this.config.entity,t=n.states[e],a=this.config.max_entries,r=this.config.show_scheduled_time;if(void 0!==t){if(!this.content){const n=document.createElement("ha-card");this.content=document.createElement("div");const e=document.createElement("style");e.textContent='\n        .type-custom-rejseplanen-card table {\n          width: 100%;\n          padding: 6px 10px;\n        }\n        .type-custom-rejseplanen-card tr:nth-child(even) {\n          background: none;\n        }\n        .type-custom-rejseplanen-card tr:nth-child(odd) {\n          background: none;\n        }\n        .type-custom-rejseplanen-card td {\n          padding: 3px 0px;\n        }\n        .type-custom-rejseplanen-card td.shrink {\n          white-space:nowrap;\n          padding: 0px 4px;\n        }\n        .type-custom-rejseplanen-card td.expand {\n          width: 99%;\n          padding-left: 4px;\n        }\n        .type-custom-rejseplanen-card span.route {\n          font-weight: bold;\n          font-size:1.2em;\n          padding:4px 10px 3px 10px;\n          color: #fff;\n          background-color: #888;\n          margin-right:0.7em;\n          border-radius: 2px;\n        }\n        .type-custom-rejseplanen-card span.track {\n          color: var(--secondary-text-color);\n          font-size: 90%;\n          float: right;\n          padding-right: 4px;\n        }\n        .type-custom-rejseplanen-card span.delay {\n          color: #b41730;\n          font-size: 90%;\n          float: right;\n          padding-right: 4px;\n        }\n\n        .type-custom-rejseplanen-card span.type-S.route-A {\n          background-color: #4AA5E5;\n        }\n\n        .type-custom-rejseplanen-card span.type-S.route-B {\n          background-color: #68AB45;\n        }\n\n        .type-custom-rejseplanen-card span.type-S.route-Bx {\n          background-color: #B3CD78;\n        }\n\n        .type-custom-rejseplanen-card span.type-S.route-C {\n          background-color: #E59535;\n        }\n\n        .type-custom-rejseplanen-card span.type-S.route-E {\n          background-color: #7670B3;\n        }\n\n        .type-custom-rejseplanen-card span.type-S.route-F {\n          background-color: #F4C443;\n        }\n\n        .type-custom-rejseplanen-card span.type-S.route-H {\n          background-color: #D44E28;\n        }\n\n        .type-custom-rejseplanen-card span.type-M.route-Metro-M1 {\n          background-color: #037756;\n        }\n\n        .type-custom-rejseplanen-card span.type-M.route-Metro-M2 {\n          background-color: #FECE00;\n        }\n\n        .type-custom-rejseplanen-card span.type-M.route-Metro-M3 {\n          background-color: #EA3755;\n        }\n\n        .type-custom-rejseplanen-card span.type-M.route-Metro-M4 {\n          background-color: #3CB4EF;\n        }\n\n        .type-custom-rejseplanen-card span.type-REG {\n          background-color: #47A541;\n        }\n\n        .type-custom-rejseplanen-card span.type-IC {\n          background-color: #EE4230;\n        }\n\n        .type-custom-rejseplanen-card span.type-LYN {\n          background-color: #FCBB58;\n        }\n\n        .type-custom-rejseplanen-card span.type-TOG[class*=" route-SJ"] {\n          background-color: #767676;\n        }\n\n        .type-custom-rejseplanen-card span.type-TOG[class*=" route-Lokalbane"] {\n          background-color: #061D42;\n        }\n\n        .type-custom-rejseplanen-card span[class*=" route-Letbane-"] {\n          background-color: #31546F;\n        }\n\n        .type-custom-rejseplanen-card span.type-BUS {\n          background-color: #FEC100;\n        }\n\n        .type-custom-rejseplanen-card span.type-EXB {\n          background-color: #2A8DFF;\n        }\n\n        .type-custom-rejseplanen-card span[class*=" route-Bus-"][class$="A"] {\n          background-color: #B12222;\n        }\n\n        .type-custom-rejseplanen-card span[class*=" route-Bus-"][class$="C"] {\n          background-color: #17AACF;\n        }\n\n        .type-custom-rejseplanen-card span[class*=" route-Bus-"][class$="E"] {\n          background-color: #228C22;\n        }\n\n        .type-custom-rejseplanen-card span[class*=" route-Bus-"][class$="N"] {\n          background-color: #808080;\n        }\n\n        .type-custom-rejseplanen-card span[class*=" route-Havnebus-"] {\n          background-color: #021C4C;\n        }\n        ',n.appendChild(e),n.appendChild(this.content),this.appendChild(n)}var o="\n    <table>\n    ",s=[];"unknown"!=t.state&&(s=[{route:t.attributes.route,type:t.attributes.type,due_in:t.attributes.due_in,scheduled_at:t.attributes.scheduled_at,direction:t.attributes.direction,track:t.attributes.track,real_time_at:t.attributes.real_time_at}].concat(t.attributes.next_departures)),a&&(s=s.slice(0,a));for(const n of s){const e=n.direction,t=n.route,a=n.type,s=n.track,c=n.real_time_at;let p=n.due_in;r&&(p=n.scheduled_at.split(" ")[1]);const d=a.replace(" ","-"),l=t.replace(" ","-");let u="";s&&(u=`<span class="track">Spor ${s}</span>`);let i="";c&&(i=`<span class="delay">(${c.split(" ")[1]})</span>`),o+=`\n          <tr>\n            <td class="shrink" style="text-align:center;"><span class="route type-${d} route-${l}">${t}</span></td>\n            <td class="expand">\n              ${e}\n              ${i}\n              ${u}\n            </td>\n            <td class="shrink" style="text-align:right;">${p}</td>\n          </tr>\n      `}o+="\n    </table>\n    ",this.content.innerHTML=o}else this.innerHTML=`\n        <ha-card>\n          <div style="display: block; color: black; background-color: #fce588; padding: 8px;">\n            Entity not found: ${e}\n          </div>\n        </ha-card>\n      `}setConfig(n){if(!n.entity)throw new Error("You need to define an entity");this.config=n}getCardSize(){return 1}});
