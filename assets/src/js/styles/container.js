import { css } from 'lit';

export default css`
.ly-Inner_Grid {
    display: grid;
    grid-template-columns: 23px minmax(0, auto) 23px;
}

.ly-Inner_Grid>*,
.ly-Inner_Grid::before,
.ly-Inner_Grid::after {
    grid-column: 2;
}

@media screen and (min-width: 1200px) {
    .ly-Inner_Grid.-xl {
        grid-template-columns: minmax(23px, 1fr) minmax(auto, var(--layout-inner-xl)) minmax(23px, 1fr);
    }
}

@media screen and (min-width: 992px) {
    .ly-Inner_Grid.-lg {
        grid-template-columns: minmax(23px, 1fr) minmax(auto, var(--layout-inner-lg)) minmax(23px, 1fr);
    }

    .ly-Inner_Grid.-md {
        grid-template-columns: minmax(23px, 1fr) minmax(auto, var(--layout-inner-md)) minmax(23px, 1fr);
    }
}

@media screen and (min-width: 768px) {
    .ly-Inner_Grid.-sm {
        grid-template-columns: minmax(23px, 1fr) minmax(auto, var(--layout-inner-sm)) minmax(23px, 1fr);
    }
}
`