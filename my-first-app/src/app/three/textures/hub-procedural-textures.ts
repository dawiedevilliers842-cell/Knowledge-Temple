import * as THREE from 'three';

export type HubTextureTheme = 'nebula' | 'marble' | 'water' | 'woven' | 'crystal';

export function createHubProceduralTexture(theme: HubTextureTheme): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    switch (theme) {
      case 'nebula':
        drawNebulaHubTexture(ctx, size);
        break;
      case 'marble':
        drawMarbleHubTexture(ctx, size);
        break;
      case 'water':
        drawWaterHubTexture(ctx, size);
        break;
      case 'woven':
        drawWovenHubTexture(ctx, size);
        break;
      case 'crystal':
        drawCrystalHubTexture(ctx, size);
        break;
      default:
        break;
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function drawNebulaHubTexture(ctx: CanvasRenderingContext2D, size: number): void {
  const gradient = ctx.createRadialGradient(
    size * 0.38,
    size * 0.34,
    size * 0.04,
    size * 0.5,
    size * 0.5,
    size * 0.62,
  );
  gradient.addColorStop(0, '#8b5cf6');
  gradient.addColorStop(0.35, '#3b4fd8');
  gradient.addColorStop(0.72, '#0f1a4a');
  gradient.addColorStop(1, '#050812');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  for (let i = 0; i < 900; i += 1) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = Math.random() * 2.2;
    ctx.fillStyle = `rgba(210, 230, 255, ${0.08 + Math.random() * 0.35})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalCompositeOperation = 'screen';
  const bloom = ctx.createRadialGradient(
    size * 0.62,
    size * 0.28,
    0,
    size * 0.62,
    size * 0.28,
    size * 0.34,
  );
  bloom.addColorStop(0, 'rgba(255, 120, 220, 0.55)');
  bloom.addColorStop(1, 'rgba(255, 120, 220, 0)');
  ctx.fillStyle = bloom;
  ctx.fillRect(0, 0, size, size);
  ctx.globalCompositeOperation = 'source-over';
}

function drawMarbleHubTexture(ctx: CanvasRenderingContext2D, size: number): void {
  ctx.fillStyle = '#d8e4ef';
  ctx.fillRect(0, 0, size, size);

  for (let layer = 0; layer < 14; layer += 1) {
    ctx.strokeStyle = `rgba(${90 + layer * 4}, ${120 + layer * 3}, ${160 + layer * 2}, ${0.08 + layer * 0.015})`;
    ctx.lineWidth = 1.2 + layer * 0.15;
    ctx.beginPath();
    for (let x = 0; x <= size; x += 6) {
      const y =
        size * 0.5 +
        Math.sin(x * 0.018 + layer * 0.7) * (size * 0.18) +
        Math.sin(x * 0.041 - layer) * (size * 0.07);
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }

  ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
  ctx.fillRect(0, 0, size, size);
}

function drawWaterHubTexture(ctx: CanvasRenderingContext2D, size: number): void {
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#0d3d4a');
  gradient.addColorStop(0.5, '#1a7a82');
  gradient.addColorStop(1, '#0a2f38');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const cx = size * 0.5;
  const cy = size * 0.5;
  for (let ring = 0; ring < 22; ring += 1) {
    const radius = ring * (size / 24) + size * 0.04;
    ctx.strokeStyle = `rgba(180, 255, 245, ${0.05 + (ring % 3) * 0.04})`;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  for (let i = 0; i < 120; i += 1) {
    const angle = (i / 120) * Math.PI * 2;
    const dist = (i % 7) * (size / 16);
    const x = cx + Math.cos(angle) * dist;
    const y = cy + Math.sin(angle) * dist;
    ctx.fillStyle = 'rgba(220, 255, 250, 0.12)';
    ctx.fillRect(x, y, 2, 2);
  }
}

function drawWovenHubTexture(ctx: CanvasRenderingContext2D, size: number): void {
  ctx.fillStyle = '#6b4423';
  ctx.fillRect(0, 0, size, size);

  const step = 14;
  for (let x = -size; x < size * 2; x += step) {
    ctx.strokeStyle = 'rgba(220, 170, 95, 0.35)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + size, size);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(140, 90, 45, 0.45)';
    ctx.beginPath();
    ctx.moveTo(x, size);
    ctx.lineTo(x + size, 0);
    ctx.stroke();
  }

  ctx.fillStyle = 'rgba(255, 210, 140, 0.12)';
  ctx.fillRect(0, 0, size, size);
}

function drawCrystalHubTexture(ctx: CanvasRenderingContext2D, size: number): void {
  ctx.fillStyle = '#1a1030';
  ctx.fillRect(0, 0, size, size);

  const palette = ['#c084fc', '#a855f7', '#7c3aed', '#5b21b6', '#ddd6fe'];
  const cols = 8;
  const rows = 8;
  const cellW = size / cols;
  const cellH = size / rows;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const x = col * cellW;
      const y = row * cellH;
      const shade = palette[(row + col) % palette.length];
      ctx.fillStyle = shade;
      ctx.beginPath();
      ctx.moveTo(x + cellW * 0.5, y);
      ctx.lineTo(x + cellW, y + cellH * 0.5);
      ctx.lineTo(x + cellW * 0.5, y + cellH);
      ctx.lineTo(x, y + cellH * 0.5);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
}
