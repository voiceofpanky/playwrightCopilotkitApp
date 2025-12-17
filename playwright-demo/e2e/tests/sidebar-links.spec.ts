import { test, expect } from '@playwright/test';

test('Verify all sidebar links', async ({ page }) => {
  await page.goto('https://pankajkumarsao.vercel.app');

  // Click hamburger menu to open sidebar
  await page.evaluate(() => {
    const toggle = Array.from(document.querySelectorAll('*')).find(el => el.textContent.trim() === ' Toggle');
    if (toggle) (toggle as HTMLElement).click();
  });

  // Define the links to verify
  const links = [
    { text: 'About me', url: 'https://pankajkumarsao.vercel.app/', title: 'Pankaj Kumar Sao | Automation Expert & Engineer' },
    { text: 'Tech-Stack & Skills', url: 'https://pankajkumarsao.vercel.app/skills', title: 'Pankaj Kumar Sao\'s Personal Website' },
    { text: 'ORGANIZATIONS', url: 'https://pankajkumarsao.vercel.app/association', title: 'PANKAJ SAO' },
    { text: 'Problem Solving', url: 'https://leetcode.com/u/voiceofpanky/', title: 'voiceofpanky - LeetCode Profile' },
    { text: 'Tech Articles', url: 'https://medium.com/@pnk126', title: 'PANKAJ SAO – Medium' },
    { text: 'Data Science', url: 'https://www.kaggle.com/pankajkumarsao', title: 'PANKAJ KUMAR SAO | Kaggle' },
    { text: 'Projects & Apps', url: 'https://pankajkumarsao.vercel.app/apps', title: 'Pankaj Kumar Sao | Automation Expert & Engineer' },
  ];

  for (const link of links) {
    // Click the link
    await page.evaluate((text) => {
      const el = Array.from(document.querySelectorAll('a')).find(a => a.textContent.trim() === text);
      if (el) (el as HTMLElement).click();
    }, link.text);

    // Verify URL and title
    await expect(page).toHaveURL(link.url);
    await expect(page).toHaveTitle(link.title);

    // Navigate back to home page
    await page.goto('https://pankajkumarsao.vercel.app');

    // Reopen the sidebar
    await page.evaluate(() => {
      const toggle = Array.from(document.querySelectorAll('*')).find(el => el.textContent.trim() === ' Toggle');
      if (toggle) (toggle as HTMLElement).click();
    });
  }
});
