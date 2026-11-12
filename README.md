# Personal Portfolio

เว็บไซต์ Personal Portfolio ด้วย Next.js App Router, TypeScript, Tailwind CSS และ Lucide React ใช้ npm จัดการแพ็กเกจ

## วิธีรัน

ต้องใช้ Node.js 20.9 ขึ้นไป (แนะนำ Node.js 24 LTS)

```bash
npm ci
npm run dev
```

เปิด http://localhost:3000

```bash
npm run lint
npm run build
npm start
```

`npm start` ใช้หลัง build สำเร็จ สำหรับรัน production server

## ภาษาไทย / English

- ปุ่ม `ไทย / EN` ด้านขวาบนสลับเนื้อหา เมนู และข้อความสำหรับโปรแกรมอ่านหน้าจอได้ทั้งเว็บ
- เริ่มต้นเป็นภาษาอังกฤษ และจำภาษาที่เลือกด้วยคุกกี้ `portfolio-language` เป็นเวลา 1 ปี
- เซิร์ฟเวอร์อ่านภาษาที่เลือกตั้งแต่คำขอแรก รวมถึง `<html lang>`, ชื่อหน้า และคำอธิบาย SEO จึงไม่ต้องรอเปลี่ยนข้อความหลังรีเฟรช
- แก้ข้อความอังกฤษใน `portfolio` และ `englishUi`; ข้อความไทยอยู่ใน `thaiPortfolio`, `thaiProjects` และ `uiText.th` ที่ `src/data/portfolio.ts`
- ใช้ ID โปรเจกต์เดียวกันทั้งสองภาษา โดยใช้ Tech Stack และ URL ร่วมกัน และคงตัวเลขผลลัพธ์ให้ตรงกัน ไฟล์เรซูเม่ยังเป็น PDF ต้นฉบับ
- หน้าแรกเรนเดอร์บนเซิร์ฟเวอร์เพื่ออ่านคุกกี้ ใช้งานผ่าน `npm start` หรือโฮสติ้งที่รองรับ Next.js server

## แก้ไขข้อมูล

- ปุ่ม `View Résumé` เปิดไฟล์ `public/Cv1.pdf` ในแท็บใหม่ หากอัปเดตเรซูเม่ให้แทนไฟล์นี้ หรือแก้ `resumeUrl` ใน `src/data/portfolio.ts`

- `src/data/portfolio.ts` — ข้อมูลส่วนตัว, About, ประสบการณ์, Projects, Skills, Activities และช่องทางติดต่อทั้งหมด
- ข้อความใน `[วงเล็บ]` เป็น Placeholder ไม่ใช่ประวัติจริง ให้แทนด้วยข้อมูลที่ตรวจสอบได้
- ใส่ URL จริงใน `socials[].href`, `projects[].github`, `projects[].demo` เพื่อเปิดใช้งานลิงก์ (ใช้ `https://` สำหรับเว็บไซต์ และ `mailto:` สำหรับ social email)
- `email` และ `phone` ใช้แสดงลิงก์ติดต่อใน Sidebar; อีเมลที่เป็น `null` จะไม่แสดง
- `siteUrl` ใช้ URL เว็บไซต์จริง เช่น `https://your-domain.com` เพื่อเปิด canonical URL, sitemap และอนุญาต indexing ใน robots.txt ค่าเริ่มต้น `null` ปิด crawling ระหว่างเป็น template
- Selected Projects ใช้รายการสองคอลัมน์: หมวดหมู่ด้านซ้ายและรายละเอียดด้านขวา ปรับได้ที่ `src/components/project-card.tsx`
- Social preview สร้างจากข้อมูลชื่อและตำแหน่งใน `src/app/opengraph-image.tsx`

## โครงสร้างสำคัญ

```text
src/
  app/                 # Routes, layout, global styles, SEO และ favicon
  components/          # Sidebar, navigation, sections, cards และ social links
  data/portfolio.ts    # ข้อมูลที่แก้ไขได้จากจุดเดียว
```

รองรับมือถือ, sticky sidebar บน desktop, navigation แสดงหมวดที่อ่านอยู่, smooth scrolling, hover animation, keyboard focus, skip link และ reduced motion โดยไม่โหลดฟอนต์หรือภาพจากบริการภายนอก

โทนขาว–ส้ม–เทา พร้อมแถบความคืบหน้าการอ่านและเอฟเฟกต์เผยเนื้อหาเมื่อเลื่อนหน้า ปรับได้ใน `src/components/page-effects.tsx` และ `src/app/globals.css` เนื้อหายังคงอ่านได้เมื่อปิด JavaScript และเมื่อเปิด reduced motion ระบบจะปิดเอฟเฟกต์เคลื่อนไหว แถบซ้ายปรับตำแหน่งตามความสูงหน้าจอเพื่อให้เข้าถึงช่องทางติดต่อได้

แอนิเมชันใช้ CSS และ IntersectionObserver โดยไม่เพิ่มไลบรารี: ชื่อปรากฏทีละคำ, เนื้อหาโปรเจกต์ทยอยแสดง, เส้นหัวข้อค่อย ๆ เปิด และตัวบอกเมนูเลื่อนตามหัวข้อ ส่วน `src/components/project-surface.tsx` ดูแลแสงไฮไลต์ตามเมาส์ เฉพาะอุปกรณ์ที่รองรับ hover และไม่ได้เปิด reduced motion ทุกเอฟเฟกต์หยุดเมื่อเล่นจบหรือเมื่อออกจากพื้นที่ ไม่ทำงานวนระหว่างอ่าน และลิงก์ที่ได้รับ keyboard focus จะแสดงทันที

## แนวทางดีไซน์

ได้แรงบันดาลใจด้านการจัดวางสองคอลัมน์และการนำเสนอผลงานจาก [Brittany Chiang](https://brittanychiang.com/) โดยเขียนโค้ดและเนื้อหาขึ้นใหม่ พร้อมเลขหมวด, timeline, รายการโปรเจกต์และรูปแบบการนำเสนอของตัวเอง ไม่มีการนำประวัติหรือทรัพย์สินของเว็บไซต์ต้นแบบมาใช้

เอกสารอ้างอิง: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Tailwind CSS with Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)

`pgk.py` เป็นไฟล์เดิมใน Workspace และไม่ได้เป็นส่วนหนึ่งของเว็บไซต์
