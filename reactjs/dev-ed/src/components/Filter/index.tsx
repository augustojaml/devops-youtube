import { Container } from './styled';

interface IFilterProps {
  categoryValue: number;
  getCategory: (value: number) => void;
}

export function Filter({ categoryValue, getCategory }: IFilterProps) {
  return (
    <>
      <Container>
        <button className={categoryValue === 0 ? 'active' : ''} onClick={() => getCategory(0)}>
          All
        </button>
        <button className={categoryValue === 35 ? 'active' : ''} onClick={() => getCategory(35)}>
          Comedy
        </button>
        <button className={categoryValue === 28 ? 'active' : ''} onClick={() => getCategory(28)}>
          Action
        </button>
      </Container>
    </>
  );
}
