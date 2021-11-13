import express from 'express';

import ListService from '../service/list-service';
import Vote from '../models/Vote';

class VoteController {
  async getAll(req: express.Request, res: express.Response) {
    try {
      const listData = await ListService.getList();
      const newList = listData.map((vote: any) => {
        vote._id = vote.id;
        return vote;
      });
      

      Vote.insertMany(newList, { ordered: false });

      res.json(listData);
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  }
}

export default new VoteController();
