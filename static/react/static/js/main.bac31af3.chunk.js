(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{14:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var s=r(3),n=r(4),a=r(6),i=r(5),c=r(8),u=r(1),o=r.n(u),l=r(7),h=r.n(l),d=(r(14),r(0));function j(e){return Object(d.jsx)("button",{className:"square",onClick:function(){return e.onClick()},children:e.value})}function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(c.a)(t[r],3),n=s[0],a=s[1],i=s[2];if(e[n]&&e[n]===e[a]&&e[n]===e[i])return e[n]}return null}var v=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(d.jsx)(j,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(o.a.Component),x=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(n.a)(r,[{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();b(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"render",value:function(){var e=this,t=this.state.history;console.log(t),console.log(this.state.stepNumber);var r,s=t[this.state.stepNumber],n=b(s.squares),a=t.map((function(t,r){var s=r?"Go to move #"+r:"Go to game start";return Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return e.jumpTo(r)},children:s})},r)}));return r=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)(v,{squares:s.squares,onClick:function(t){return e.handleClick(t)}})}),Object(d.jsxs)("div",{className:"game-info",children:[Object(d.jsx)("div",{children:r}),Object(d.jsx)("ol",{children:a})]})]})}}]),r}(o.a.Component);h.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.bac31af3.chunk.js.map