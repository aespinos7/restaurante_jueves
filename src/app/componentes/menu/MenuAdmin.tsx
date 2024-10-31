export const MenuAdmin = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>No.</th>
                <th style={{ width: "25%" }}>Nombre Plato</th>
                <th style={{ width: "25%" }}>Acompañamiento</th>
                <th style={{ width: "15%" }} className="text-center">
                  Precio
                </th>
                <th style={{ width: "20%" }}>Region</th>
                <th style={{ width: "10%" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bandeja paisa</td>
                <td>Con aguacate</td>
                <td className="text-center">35000</td>
                <td>Andina</td>
                <td>
                <a href="/menuactu/1">
                  <i className="fa-solid fa-pen-to-square" style={{color: "#22C775"}}></i> 
                  </a>
                &nbsp;&nbsp;&nbsp;
                <i className="fa-solid fa-eraser" style={{color: "#E0010F"}}></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ajiaco</td>
                <td>Con arroz</td>
                <td className="text-center">20000</td>
                <td>Andina</td>
                <td>
                <a href="/menuactu/2">
                  <i className="fa-solid fa-pen-to-square" style={{color: "#22C775"}}></i> 
                  </a>
                &nbsp;&nbsp;&nbsp;
                <i className="fa-solid fa-eraser" style={{color: "#E0010F"}}></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Pescado frito</td>
                <td>Con patacon</td>
                <td className="text-center">30000</td>
                <td>Caribe</td>
                <td>
                <a href="/menuactu/3">
                  <i className="fa-solid fa-pen-to-square" style={{color: "#22C775"}}></i> 
                  </a>
                &nbsp;&nbsp;&nbsp;
                <i className="fa-solid fa-eraser" style={{color: "#E0010F"}}></i>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mute santadereano</td>
                <td>Con arroz</td>
                <td className="text-center">25000</td>
                <td>Andina</td>
                <td>
                <a href="/menuactu/4">
                  <i className="fa-solid fa-pen-to-square" style={{color: "#22C775"}}></i> 
                  </a>
                &nbsp;&nbsp;&nbsp;
                <i className="fa-solid fa-eraser" style={{color: "#E0010F"}}></i>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Piraña a la brasa</td>
                <td>Con arroz</td>
                <td className="text-center">36000</td>
                <td>Orinoquia</td>
                <td>
                <a href="/menuactu/5">
                  <i className="fa-solid fa-pen-to-square" style={{color: "#22C775"}}></i> 
                  </a>
                &nbsp;&nbsp;&nbsp;
                <i className="fa-solid fa-eraser" style={{color: "#E0010F"}}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
