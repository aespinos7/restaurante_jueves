export const MenuListar = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{width: "5%"}}>No.</th>
                <th style={{width: "30%"}}>Nombre Plato</th>
                <th style={{width: "25%"}}>Acompañamiento</th>
                <th style={{width: "20%"}} className="text-center">Precio</th>
                <th style={{width: "20%"}}>Region</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bandeja paisa</td>
                <td>Con aguacate</td>
                <td className="text-center">35000</td>
                <td>Andina</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ajiaco</td>
                <td>Con arroz</td>
                <td className="text-center">20000</td>
                <td>Andina</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Pescado frito</td>
                <td>Con patacon</td>
                <td className="text-center">30000</td>
                <td>Caribe</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mute santadereano</td>
                <td>Con arroz</td>
                <td className="text-center">25000</td>
                <td>Andina</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Piraña a la brasa</td>
                <td>Con arroz</td>
                <td className="text-center">36000</td>
                <td>Orinoquia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
