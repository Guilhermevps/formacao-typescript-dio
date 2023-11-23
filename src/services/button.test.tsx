import { render, screen, fireEvent } from '@testing-library/react';
import Botao from '../components/Button/Button';

describe('Botao', () => {
  it('Teste mensagem boas vindas', () => {
    const testeBotao = jest.spyOn(window, 'alert');
    render(<Botao />);
    const button = screen.getByText('Entrar');
    fireEvent.click(button);
    expect(testeBotao).toHaveBeenCalledWith('Bem vindo!');
  });
});
