import{test, expect} from '@playwright/test';

test('Practice jenkins 4', async ({page}) => {
    console.log('Starting practice test 4')
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    console.log('Ending practice test 4')
})
test('Practice jenkins 5', async ({page}) => {
    console.log('Starting practice test 5')
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    console.log('Ending practice test 5')
})
test('Practice jenkins 6', async ({page}) => {
    console.log('Starting practice test 6')
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    console.log('Ending practice test 6')
})