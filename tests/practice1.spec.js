import{test, expect} from '@playwright/test';

test('Practice jenkins 1', async ({page}) => {
    console.log('Starting practice test 1')
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    console.log('Ending practice test 1')
})

test('Practice jenkins 2', async ({page}) => {
    console.log('Starting practice test 2')
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    console.log('Ending practice test 2')
})
test('Practice jenkins 3 @Dev', async ({page}) => {
    console.log('Starting practice test 3')
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    console.log('Ending practice test 3')
})