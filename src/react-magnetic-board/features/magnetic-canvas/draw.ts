import { Magnet } from '../../types';

export function draw(ctx: CanvasRenderingContext2D, canvasRect: ClientRect, magnets: Magnet[]) {
  ctx!.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  magnets.forEach(magnet => drawMagnet(ctx!, canvasRect, magnet));
}

function drawMagnet(ctx: CanvasRenderingContext2D, canvasRect: ClientRect, magnet: Magnet) {
  const magnetCheck = { ...magnet };
  magnetCheck.x = magnet.x! - canvasRect.left;
  magnetCheck.y = magnet.y! - canvasRect.top;

  magnetCheck.fillStyle = magnet.fillStyle ? magnet.fillStyle : '';
  magnetCheck.shadowColor = magnet.shadowColor ? magnet.shadowColor : '';
  magnetCheck.shadowBlur = magnet.shadowBlur ? magnet.shadowBlur : 0;
  magnetCheck.scale = magnet.scale ? magnet.scale : 1;
  magnetCheck.offsetX = magnet.offsetX ? magnet.offsetX : 0;
  magnetCheck.offsetY = magnet.offsetY ? magnet.offsetY : 0;

  ctx.fillStyle = magnetCheck.fillStyle;
  ctx.shadowColor = magnetCheck.shadowColor;
  ctx.shadowBlur = magnetCheck.shadowBlur;
  ctx.save();
  ctx.scale(magnetCheck.scale, magnetCheck.scale);
  ctx.translate(
    magnetCheck.x! / magnetCheck.scale - magnetCheck.offsetX,
    magnetCheck.y! / magnetCheck.scale - magnetCheck.offsetY,
  );
  const magnetPath = new Path2D(magnetCheck.path);
  ctx.fill(magnetPath);
  ctx.restore();
}
