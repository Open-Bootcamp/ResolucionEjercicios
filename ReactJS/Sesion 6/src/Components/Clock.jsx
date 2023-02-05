import React, { useState, useEffect } from 'react';

const Clock = () => {
  const defaultState = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José',
  };

  const [user, setUser] = useState(defaultState);

  // Si no se añade el array vacío como dependencia,
  // el código se ejecuta cada que el componete se
  // renderiza (lo que equivale al componentDidUpdate(),
  // en lugar del componentDidMount() del componente
  // de clase).
  // Verifíquelo descomentanto los console.log(),
  // y añadiendo los correspondientes en los métodos
  // componentDidMount() y componentWillUnmount() del
  // componente de clase
  useEffect(() => {
    const intervalAge = setInterval(() => {
      actualiceUser();
    }, 1000);
    //console.log("Mounting");
    return () => {
      //console.log("Unmounting");
      clearInterval(intervalAge);
    };
  }, []);

  const actualiceUser = () => {
    // Se debe usar prevUser en este caso porque el código
    // en el useEffect solo se va a ejecutar una vez (tras montar
    // el componente), así que el setInterval() queda configurado
    // y siempre se ejecuta con los datos que había en user en
    // ese momento.
    // En particular, user.edad = 0, y cada vez que corre el código
    // del setInterval() user.edad = 0. Por lo que cada vez que se
    // re-renderiza el componente, la edad en pantalla se actualiza a 1.
    // Si usamos prevUser, setUser puede leer el valor de user en el
    // contexto global (actual).
    // Más info en: https://stackoverflow.com/a/59274004/14862122
    return setUser((prevUser) => ({
      // Es necesario crear una nueva fecha, new Date(),
      // para que la hora se actualice cada segundo
      fecha: new Date(),
      edad: prevUser.edad + 1,
      nombre: prevUser.nombre,
      apellidos: prevUser.apellidos,
    }));
    // Una solución más compacta sería:
    /* 
    return setUser(prevUser=>({
        ...prevUser,
        fecha: new Date(),
        edad: prevUser.edad + 1,
      })
    );
    */
  };
  return (
    <div>
      <h2>
        Hora Actual:
        {user.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {user.nombre} {user.apellidos}
      </h3>
      <h1>Edad: {user.edad}</h1>
    </div>
  );
};

export default Clock;