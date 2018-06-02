import React, { Component } from 'react';
import {render} from 'react-dom';
import {Layer, Rect, Stage, Group,Shape,Line} from 'react-konva';
import Konva from 'konva';

function drawTree(ctx,x, y, r, l){

      var cvr = Math.PI/180;  // converter
      if (Math.abs(l) > 5) { // 枝の長さが一定以上なら小枝をつける
        var px = x + (l/2)*Math.cos(r * cvr);  // 小枝の分岐点
        var py = y - (l/2)*Math.sin(r * cvr);  // 小枝の分岐点

        drawTree(ctx,x + l * Math.cos(r * cvr), y - l * Math.sin(r * cvr), r, l*0.8);// 小枝１
        drawTree(ctx,px, py, r+25, l*0.5);  // 小枝２
        drawTree(ctx,px, py, r-25, l*0.5);  // 小枝３
      }

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + l*Math.cos(r * cvr), y - l*Math.sin(r * cvr));  // "枝" を描画
      ctx.stroke();//ここまで書いたものを実際に描画
    }

function Fract() {
    var stagewidth =window.innerWidth
    var stageheight =window.innerHeight
      return (
         <Shape fill="#00D2FF" draggable
             sceneFunc={function (ctx) {//sceneFuncで描画する形を記述
                 drawTree(ctx,300, 500, 90, 100);
                 drawTree(ctx,stagewidth-300, 500, 90, 100);
                 // Konva specific method
                 ctx.fillStrokeShape(this);
             }}
         />
      );
    }

export default Fract;
