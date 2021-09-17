import { getLevel } from '../index';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => { jest.resetAllMocks() });

test('test if http has correct status', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 25 });

    expect(getLevel(25)).toBe('Ваш текущий уровень: 25');
})

test('test if http has correct status', () => {
    fetchData.mockReturnValue({ status: 'error' });

    expect(getLevel(25)).toBe('Информация об уровне временно недоступна');
})