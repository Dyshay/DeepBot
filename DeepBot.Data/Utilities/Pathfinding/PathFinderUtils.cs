using DeepBot.Data.Enums;
using DeepBot.Data.Generic;
using DeepBot.Data.Model;
using DeepBot.Data.Model.MapComponent;
using DeepBot.Data.Utilities.Animations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DeepBot.Data.Utilities.Pathfinding
{
    public class PathFinderUtils : Singleton<PathFinderUtils>
    {
        private readonly Dictionary<AnimationTypeEnum, AnimationDuration> AnimationTimes = new Dictionary<AnimationTypeEnum, AnimationDuration>()
        {
            { AnimationTypeEnum.DRAGO, new AnimationDuration(135, 200, 120) },
            { AnimationTypeEnum.RUN, new AnimationDuration(170, 255, 150) },
            { AnimationTypeEnum.WALK, new AnimationDuration(480, 510, 425) },
            { AnimationTypeEnum.GHOST, new AnimationDuration(57, 85, 50) }
        };

        public string GetPathfindingString(List<Node> path)
        {
            Node targetNode = path.Last();

            if (path.Count <= 2)
                return targetNode.GetCharDirection(path.First()) + Hash.GetCellChar(targetNode.Id);

            StringBuilder pathfinder = new StringBuilder();
            char previousDir = path[1].GetCharDirection(path.First()), actualDir;

            for (int i = 2; i < path.Count; i++)
            {
                Node actualNode = path[i];
                Node previousNode = path[i - 1];
                actualDir = actualNode.GetCharDirection(previousNode);

                if (previousDir != actualDir)
                {
                    pathfinder.Append(previousDir);
                    pathfinder.Append(Hash.GetCellChar(previousNode.Id));

                    previousDir = actualDir;
                }
            }
            pathfinder.Append(previousDir);
            pathfinder.Append(Hash.GetCellChar(targetNode.Id));
            return pathfinder.ToString();
        }

        public int GetDeplacementTime(Map map, List<Node> nodes, bool isUsingDrago = false)
        {
            int deplacementTime = 20;
            AnimationDuration animationDuration;
            MapCell actualCell = map.CurrentMap.Cells[nodes.First().Id];

            if (isUsingDrago)
                animationDuration = AnimationTimes[AnimationTypeEnum.DRAGO];
            else
                animationDuration = nodes.Count > 6 ? AnimationTimes[AnimationTypeEnum.RUN] : AnimationTimes[AnimationTypeEnum.WALK];

            MapCell currentCell;

            for (int i = 1; i < nodes.Count; i++)
            {
                currentCell = map.CurrentMap.Cells[nodes[i].Id];

                if (actualCell.Y == currentCell.Y)
                    deplacementTime += animationDuration.Horizontal;
                else if (actualCell.X == currentCell.Y)
                    deplacementTime += animationDuration.Vertical;
                else
                    deplacementTime += animationDuration.Linear;

                if (actualCell.LayerGroundLevel < currentCell.LayerGroundLevel)
                    deplacementTime += 100;
                else if (currentCell.LayerGroundLevel > actualCell.LayerGroundLevel)
                    deplacementTime -= 100;
                else if (actualCell.LayerGroundSlope != currentCell.LayerGroundSlope)
                {
                    if (actualCell.LayerGroundSlope == 1)
                        deplacementTime += 100;
                    else if (currentCell.LayerGroundSlope == 1)
                        deplacementTime -= 100;
                }
                actualCell = currentCell;
            }

            return deplacementTime;
        }
    }
}
