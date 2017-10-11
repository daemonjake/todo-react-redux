/* eslint-disable no-undef */

const assert = require('assert');
const {Chrome} = require('navalia');
const pageUrl = 'http://localhost:3000';

const sleep = timeout => new Promise(resolve => {
    setTimeout(() => resolve(), timeout);
});

describe('Todo React Redux', () => {
    let chrome = {};

    beforeEach(() => {
        chrome = new Chrome();
    });

    afterEach(() => chrome.done());

    it('It should have 3 tabs', async () => {
        await chrome.goto(pageUrl);
        const exists = await chrome.exists('[data-test="Tabs"]');

        assert.ok(exists);
    });

    it('It should have a list', async () => {
        await chrome.goto(pageUrl);
        const exists = await chrome.exists('[data-test="List"]');

        assert.ok(exists);
    });

    it('It should have a text field', async () => {
        await chrome.goto(pageUrl);
        const exists = await chrome.exists('[data-test="TextField"]');

        assert.ok(exists);
    });

    it('It should have a button', async () => {
        await chrome.goto(pageUrl);
        const exists = await chrome.exists('[data-test="Button"]');

        assert.ok(exists);
    });

    it('It should add a todo called "My Todo"', async () => {
        const todoString = 'My Todo';
        await chrome.goto(pageUrl);
        await chrome.type('[data-test="TextField"] input', todoString);
        await chrome.click('[data-test="Button"] button');
        const html = await chrome.html('[data-test="List"]');

        assert.ok(html.includes(todoString));
    });

    it('The filter should be set to "All"', async () => {
        await chrome.goto(pageUrl);
        await sleep(250);
        await chrome.click('[data-test="Tabs"] button:nth-child(1)');

        const value = await chrome.attr('#TabsFilter', 'value');

        assert.ok(value.includes('All'));
    });

    it('It should show a new todo when filter is "All"', async () => {
        const todoString = 'A New Todo';
        await chrome.goto(pageUrl);
        await chrome.type('[data-test="TextField"] input', todoString);
        await chrome.click('[data-test="Button"] button');
        await chrome.click('[data-test="Tabs"] button:nth-child(1)');
        const html = await chrome.html('[data-test="List"]');

        assert.ok(html.includes(todoString));
    });

    it('The filter should be set to "Active"', async () => {
        await chrome.goto(pageUrl);
        await chrome.click('[data-test="Tabs"] button:nth-child(2)');

        const value = await chrome.attr('#TabsFilter', 'value');

        assert.ok(value.includes('Active'));
    });

    it('The todo should hide when clicked and filter is "Active"', async () => {
        await chrome.goto(pageUrl);
        await sleep(250);
        // Select the Active tab
        await chrome.click('[data-test="Tabs"] button:nth-child(2)');

        // Add the "Inactive" todo
        const todoString = 'An_Inactive_Todo';
        await chrome.type('[data-test="TextField"] input', todoString);
        await chrome.click('[data-test="Button"] button');
        await chrome.click('[data-test="Todo"]:nth-child(1) span');

        const html = await chrome.html('[data-test="List"]');
        const value = await chrome.attr('#TabsFilter', 'value');
        const result = value.includes('Active') && !html.includes(todoString);

        assert.ok(result);
    });

    it('The todo should be visible when clicked and filter is "Inactive"', async () => {
        await chrome.goto(pageUrl);
        await sleep(250);
        // Select the Active tab
        await chrome.click('[data-test="Tabs"] button:nth-child(2)');

        // Add the "Inactive" todo
        const todoString = 'An_Inactive_Todo';
        await chrome.type('[data-test="TextField"] input', todoString);
        await chrome.click('[data-test="Button"] button');
        await chrome.click('[data-test="Todo"]:nth-child(1) span');

        await chrome.click('[data-test="Tabs"] button:nth-child(3)');

        const html = await chrome.html('[data-test="List"]');
        const value = await chrome.attr('#TabsFilter', 'value');
        const result = value.includes('Inactive') && html.includes(todoString);

        assert.ok(result);
    });
});
