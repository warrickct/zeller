import React from 'react';
import { render } from '@testing-library/react';
import UserListItem from './UserListItem';

describe("UserListItem Component", () => {
    it ("should be defined with valid props", () => {
        const { getByTestId } = render(<UserListItem name="John Deer" role="ADMIN" />)
        expect( getByTestId('user-list-item__name')).toBeDefined();
    })
})