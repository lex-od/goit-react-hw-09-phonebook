import css from './Container.module.scss';

const Container = ({ children }) => (
    <div className={css.container}>{children}</div>
);

export default Container;
