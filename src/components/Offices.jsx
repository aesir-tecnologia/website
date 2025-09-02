import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="São Paulo" invert={invert}>
          Av. Paulista, 1000
          <br />
          01310-100, São Paulo, SP
        </Office>
      </li>
      <li>
        <Office name="Rio de Janeiro" invert={invert}>
          Rua da Assembleia, 100
          <br />
          20011-000, Centro, RJ
        </Office>
      </li>
    </ul>
  )
}
