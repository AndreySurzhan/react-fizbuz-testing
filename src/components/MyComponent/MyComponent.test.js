import MyComponent from './MyComponent';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';

let container = null;


describe('component renders', () => {
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    
    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });
    
    it('should render button', () => {
        act(() => {
            ReactDOM.render(<MyComponent name="something"/>, container);  
        });

        expect(container.querySelector('button').textContent).toEqual('Calc');
    });
});

describe('calcFizBuz', () => {
    const component = new MyComponent();

    it("should return 'fiz' when give number is devisable by 3", () => {
        const result = component.calcFizBuz(3);

        expect(result).toBe('fiz');
    });

    it("should return 'buz' when give number is devisable by 5", () => {
        const result = component.calcFizBuz(5);

        expect(result).toBe('buz');
    });

    it("should return 'fizBuz' when give number is devisable by 3 and 5", () => {
        const result = component.calcFizBuz(15);

        expect(result).toBe('fizBuz');
    });

    it('should return passed value when give value is not devisable by 3 or 5', () => {
        const givenValue = 1;
        const result = component.calcFizBuz(givenValue);

        expect(result).toBe(givenValue);
    });
});
