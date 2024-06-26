namespace MiWebAPI.Models
{
    public class Empleado
    {
        public int idEmpleado { get; set; }
        public string? NombreCompleto { get; set; }
        public string? Correo { get; set; }
        public decimal Sueldo { get; set; }
        public string? FechaContrato { get; set; }

    }
}

