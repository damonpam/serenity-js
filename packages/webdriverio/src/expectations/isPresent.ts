import { Expectation } from '@serenity-js/core';
import { Element } from 'webdriverio';

import { ElementExpectation } from './ElementExpectation';

/**
 * @desc
 *  Expectation that the element is present in the DOM of a page.
 *  Please note that this does not necessarily mean that the element is visible.
 *
 * @returns {@serenity-js/core/lib/screenplay/questions~Expectation<boolean, Element<'async'>>}
 *
 * @see https://webdriver.io/docs/api/element/isExisting/
 * @see {@link @serenity-js/assertions~Ensure}
 * @see {@link @serenity-js/core/lib/screenplay/questions~Check}
 * @see {@link Wait}
 */
export function isPresent(): Expectation<boolean, Element<'async'>> {
    return ElementExpectation.forElementTo('become present', actual => actual.isExisting());
}
