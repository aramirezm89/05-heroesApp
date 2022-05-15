using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace HeroeAPI.Modelos
{
  public class Heroe
  {
    [BsonId]
    public ObjectId Id { get; set; }
    public string Nombre { get; set; }
    public bool Vuela { get; set; }
    public string Color { get; set; }
  }
}
